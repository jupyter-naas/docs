import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function EventsSection() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  // Sample event data - replace with your actual events
  const upcomingEvents = [
    {
      id: 1,
      title: 'NCOR Annual Meeting 2023',
      description: 'The annual gathering of NCOR members featuring keynote speeches, workshops, and presentations on the latest ontology research.',
      date: 'November 15-17, 2023',
      location: 'Buffalo, NY',
      url: '/events/ncor-annual-meeting-2023'
    },
    {
      id: 2,
      title: 'Ontologies in Biomedicine Workshop',
      description: 'A two-day workshop focused on recent developments and applications of ontologies in biomedical research and healthcare.',
      date: 'January 22-23, 2024',
      location: 'Cambridge, MA',
      url: '/events/ontologies-biomedicine-workshop-2024'
    },
    {
      id: 3,
      title: 'Formal Ontology Summer School',
      description: 'An intensive five-day summer school providing training in the foundations and applications of formal ontology.',
      date: 'June 10-14, 2024',
      location: 'Vienna, Austria',
      url: '/events/formal-ontology-summer-school-2024'
    }
  ];
  
  const pastEvents = [
    {
      id: 4,
      title: 'Applied Ontology Conference 2023',
      description: 'International conference bringing together researchers from all areas of applied ontology.',
      date: 'July 18-21, 2023',
      location: 'Toronto, Canada',
      url: '/events/applied-ontology-conference-2023'
    },
    {
      id: 5,
      title: 'BFO Workshop Series',
      description: 'A series of online workshops introducing Basic Formal Ontology (BFO) and its applications.',
      date: 'March 5-26, 2023',
      location: 'Virtual',
      url: '/events/bfo-workshop-series-2023'
    },
    {
      id: 6,
      title: 'Interoperability Summit 2023',
      description: 'A gathering of experts discussing challenges and solutions for semantic interoperability across domains.',
      date: 'May 9-10, 2023',
      location: 'Amsterdam, Netherlands',
      url: '/events/interoperability-summit-2023'
    }
  ];
  
  // Display events based on active tab
  const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

  return (
    <div className={styles.eventsContainer}>
      <div className="container">
        <div className={styles.headerRow}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              Events & <span className={styles.highlight}>Conferences</span>
            </h2>
            <p className={styles.sectionDescription}>
              Connect with the global ontology community through our conferences, workshops, and 
              educational events.
            </p>
          </div>
          <div className={styles.allEventsLink}>
            <Link to="/events" className={styles.viewAllLink}>
              All Events
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrowIcon}
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5L19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        
        <div className={styles.tabContainer}>
          <button 
            className={clsx(styles.tabButton, activeTab === 'upcoming' && styles.activeTab)}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={clsx(styles.tabButton, activeTab === 'past' && styles.activeTab)}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>
        
        <div className={styles.eventsGrid}>
          {displayedEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <span className={styles.eventType}>Event</span>
                </div>
                <p className={styles.eventDescription}>{event.description}</p>
                <div className={styles.eventMeta}>
                  <div className={styles.eventDate}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={styles.metaIcon}
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {event.date}
                  </div>
                  <div className={styles.eventLocation}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={styles.metaIcon}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.location}
                  </div>
                </div>
              </div>
              <div className={styles.eventFooter}>
                <Link to={event.url} className={styles.viewDetailsLink}>
                  View Details
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.detailsArrow}
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 