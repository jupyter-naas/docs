import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';

const NetworkGraph = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [draggedNode, setDraggedNode] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [graphSize, setGraphSize] = useState({ width: 100, height: 100 });
  const graphRef = useRef(null);
  const svgRef = useRef(null);
  const animationRef = useRef(null);
  const [nodes, setNodes] = useState([
    { id: 1, label: 'Knowledge Base', x: 50, y: 25, radius: 10, color: 'rgba(76, 223, 136, 0.8)' },
    { id: 2, label: 'Ontology', x: 50, y: 50, radius: 12, color: 'rgba(76, 223, 136, 1)' },
    { id: 3, label: 'Agent', x: 75, y: 30, radius: 8, color: 'rgba(76, 223, 136, 0.7)' },
    { id: 4, label: 'LLM', x: 25, y: 35, radius: 8, color: 'rgba(76, 223, 136, 0.7)' },
    { id: 5, label: 'Workflow', x: 65, y: 70, radius: 8, color: 'rgba(76, 223, 136, 0.7)' },
    { id: 6, label: 'Data Source', x: 35, y: 70, radius: 8, color: 'rgba(76, 223, 136, 0.7)' },
    { id: 7, label: 'Analytics', x: 20, y: 60, radius: 7, color: 'rgba(76, 223, 136, 0.6)' },
    { id: 8, label: 'User', x: 80, y: 60, radius: 7, color: 'rgba(76, 223, 136, 0.6)' },
  ]);

  const edges = [
    { from: 1, to: 2, width: 1.5, animated: true, arrow: true },
    { from: 2, to: 3, width: 1.5, animated: true, arrow: true },
    { from: 2, to: 4, width: 1.5, animated: false, arrow: true },
    { from: 2, to: 5, width: 1.5, animated: false, arrow: true },
    { from: 2, to: 6, width: 1.5, animated: false, arrow: true },
    { from: 6, to: 7, width: 1, animated: false, arrow: true },
    { from: 3, to: 8, width: 1, animated: true, arrow: true },
    { from: 4, to: 3, width: 1, animated: true, arrow: true },
    { from: 5, to: 8, width: 1, animated: false, arrow: true },
    { from: 6, to: 2, width: 1, animated: true, arrow: true },
  ];

  // Simulated data packets for animations
  const [packets, setPackets] = useState([
    { id: 1, fromNode: 1, toNode: 2, progress: 0, speed: 0.01 },
    { id: 2, fromNode: 2, toNode: 3, progress: 0.3, speed: 0.008 },
    { id: 3, fromNode: 4, toNode: 3, progress: 0.5, speed: 0.012 },
    { id: 4, fromNode: 6, toNode: 2, progress: 0.7, speed: 0.009 },
    { id: 5, fromNode: 3, toNode: 8, progress: 0.2, speed: 0.01 },
  ]);

  // Resize observer to make graph responsive
  useEffect(() => {
    if (!graphRef.current) return;
    
    const resizeObserver = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      setGraphSize({ width: 100, height: 100 }); // Keep 100 as coordinate system
    });
    
    resizeObserver.observe(graphRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    setIsAnimating(true);
    
    const animate = () => {
      setPackets(prevPackets => 
        prevPackets.map(packet => {
          let newProgress = packet.progress + packet.speed;
          if (newProgress > 1) newProgress = 0;
          return { ...packet, progress: newProgress };
        })
      );
      
      // Only apply subtle movement if not dragging
      if (!draggedNode) {
        setNodes(prevNodes => 
          prevNodes.map(node => {
            const noise = Math.sin(Date.now() * 0.001 + node.id) * 0.2;
            return { 
              ...node, 
              x: node.x + noise * 0.05,
              y: node.y + noise * 0.03
            };
          })
        );
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setIsAnimating(false);
    };
  }, [draggedNode]);

  // Helper to find node by id
  const findNode = (id) => nodes.find(node => node.id === id);

  // Helper to position nodes on the SVG canvas
  const positionNode = (node) => ({
    x: `${node.x}%`,
    y: `${node.y}%`,
  });

  // Helper to create edge path between nodes and correctly position arrows
  const createEdgePath = (edge) => {
    const fromNode = findNode(edge.from);
    const toNode = findNode(edge.to);
    
    if (!fromNode || !toNode) return '';
    
    const from = positionNode(fromNode);
    const to = positionNode(toNode);
    
    return `M ${from.x} ${from.y} L ${to.x} ${to.y}`;
  };

  // Add this new helper function for arrow positioning
  const calculateArrowPosition = (edge) => {
    const fromNode = findNode(edge.from);
    const toNode = findNode(edge.to);
    
    if (!fromNode || !toNode) return { position: { x: 0, y: 0 }, angle: 0 };
    
    // Get center positions
    const fromX = parseFloat(fromNode.x);
    const fromY = parseFloat(fromNode.y);
    const toX = parseFloat(toNode.x);
    const toY = parseFloat(toNode.y);
    
    // Calculate angle
    const angle = Math.atan2(toY - fromY, toX - fromX) * (180 / Math.PI);
    
    // Calculate the line length
    const dx = toX - fromX;
    const dy = toY - fromY;
    const lineLength = Math.sqrt(dx * dx + dy * dy);
    
    // Adjust the position to be at the edge of the node rather than center
    // Use the node radius to offset from center
    const offsetRatio = (lineLength - toNode.radius - 2) / lineLength;
    
    const arrowX = fromX + dx * offsetRatio;
    const arrowY = fromY + dy * offsetRatio;
    
    return {
      position: { x: `${arrowX}%`, y: `${arrowY}%` },
      angle: angle
    };
  };

  // Helper to position data packets along edges for animation
  const positionPacket = (packet) => {
    const fromNode = findNode(packet.fromNode);
    const toNode = findNode(packet.toNode);
    
    if (!fromNode || !toNode) return { x: 0, y: 0 };
    
    const fromX = parseFloat(fromNode.x);
    const fromY = parseFloat(fromNode.y);
    const toX = parseFloat(toNode.x);
    const toY = parseFloat(toNode.y);
    
    const x = fromX + (toX - fromX) * packet.progress;
    const y = fromY + (toY - fromY) * packet.progress;
    
    return {
      x: `${x}%`,
      y: `${y}%`,
    };
  };

  // Fixed mouse event handlers for dragging
  const handleMouseDown = (e, nodeId) => {
    const node = findNode(nodeId);
    if (!node) return;
    
    // Store SVG reference and rect for later use
    const svgElement = svgRef.current;
    if (!svgElement) return;
    
    const svgRect = svgElement.getBoundingClientRect();
    
    // Calculate offset
    const mouseX = (e.clientX - svgRect.left) / svgRect.width * 100;
    const mouseY = (e.clientY - svgRect.top) / svgRect.height * 100;
    
    setDragOffset({
      x: mouseX - node.x,
      y: mouseY - node.y,
      svgRect // Store the SVG rect for use in mousemove
    });
    
    setDraggedNode(nodeId);
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e) => {
    if (!draggedNode || !dragOffset.svgRect) return;
    
    const svgRect = dragOffset.svgRect;
    
    // Calculate new position
    const mouseX = (e.clientX - svgRect.left) / svgRect.width * 100;
    const mouseY = (e.clientY - svgRect.top) / svgRect.height * 100;
    
    // Update node position
    setNodes(prevNodes => 
      prevNodes.map(node => 
        node.id === draggedNode 
          ? { 
              ...node, 
              x: Math.max(0, Math.min(100, mouseX - dragOffset.x)),
              y: Math.max(0, Math.min(100, mouseY - dragOffset.y))
            }
          : node
      )
    );
  };

  const handleMouseUp = () => {
    setDraggedNode(null);
  };

  // Set up global mouse event listeners for drag operations
  useEffect(() => {
    if (draggedNode) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [draggedNode]);

  return (
    <div className={styles.networkGraph} ref={graphRef}>
      <div className={styles.graphBackground}></div>
      <svg 
        ref={svgRef}
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid meet"
        className={styles.graphSvg}
      >
        {/* Grid Lines */}
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(76, 223, 136, 0.1)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#grid)" />
        
        {/* Edges */}
        {edges.map((edge, index) => (
          <g key={`edge-${index}`} className={styles.edge}>
            <path
              d={createEdgePath(edge)}
              stroke={edge.animated ? "rgba(76, 223, 136, 0.6)" : "rgba(76, 223, 136, 0.4)"}
              strokeWidth={edge.width}
              fill="none"
              strokeDasharray={edge.animated ? "5,5" : "none"}
              className={edge.animated ? styles.animatedEdge : ''}
            />
            {edge.arrow && (() => {
              const { position, angle } = calculateArrowPosition(edge);
              return (
                <path
                  d="M 0,-4 L 8,0 L 0,4 Z"
                  fill="rgba(76, 223, 136, 0.9)"
                  transform={`translate(${position.x}, ${position.y}) rotate(${angle})`}
                  style={{ zIndex: 5 }}
                />
              );
            })()}
          </g>
        ))}
        
        {/* Data Packets */}
        {packets.map((packet) => {
          const position = positionPacket(packet);
          return (
            <circle
              key={`packet-${packet.id}`}
              cx={position.x}
              cy={position.y}
              r="1.2"
              fill="rgba(76, 223, 136, 0.9)"
              className={styles.dataPacket}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => {
          const position = positionNode(node);
          const isHovered = hoveredNode === node.id;
          const isDragging = draggedNode === node.id;
          return (
            <g 
              key={`node-${node.id}`}
              className={styles.node}
              onMouseDown={(e) => handleMouseDown(e, node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              {/* Highlight ring on hover */}
              {(isHovered || isDragging) && (
                <circle
                  cx={position.x}
                  cy={position.y}
                  r={node.radius * 1.3}
                  fill="none"
                  stroke={isDragging ? "rgba(76, 223, 136, 0.5)" : "rgba(76, 223, 136, 0.3)"}
                  strokeWidth="2"
                  className={styles.nodeHighlight}
                />
              )}
              
              {/* Main node circle */}
              <circle
                cx={position.x}
                cy={position.y}
                r={node.radius * (isHovered || isDragging ? 1.1 : 1)}
                fill={isHovered || isDragging ? node.color : node.color.replace(')', ', 0.7)')}
                stroke="rgba(76, 223, 136, 0.8)"
                strokeWidth="1"
                className={isHovered ? styles.nodeHovered : ''}
              />
              
              {/* Node label */}
              <text
                x={position.x}
                y={position.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={isHovered || isDragging ? "#fff" : "rgba(255, 255, 255, 0.8)"}
                fontSize={isHovered || isDragging ? "2.2" : "1.8"}
                fontWeight={isHovered || isDragging ? "600" : "500"}
                className={styles.nodeLabel}
                pointerEvents="none"
              >
                {node.label}
              </text>
            </g>
          );
        })}
        
        {/* Pulse effects */}
        <circle 
          cx="50%" 
          cy="50%" 
          r="5" 
          fill="none" 
          stroke="rgba(76, 223, 136, 0.2)" 
          strokeWidth="1" 
          className={styles.pulseRing}
        />
        <circle 
          cx="50%" 
          cy="50%" 
          r="15" 
          fill="none" 
          stroke="rgba(76, 223, 136, 0.1)" 
          strokeWidth="0.8" 
          className={styles.pulseRing}
          style={{ animationDelay: '1s' }}
        />
      </svg>
    </div>
  );
};

export default NetworkGraph; 