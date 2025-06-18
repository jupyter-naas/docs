import React, { useState } from 'react';
import styles from './styles.module.css';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('submitting');

    try {
      // This is a placeholder for actual email submission
      // In a real implementation, you would connect to your email service
      // Example with EmailJS:
      // await emailjs.send('service_id', 'template_id', { email });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.substackSubscribe}>
      <form onSubmit={handleSubmit} className={styles.substackSubscribeForm}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={styles.substackSubscribeInput}
          disabled={isSubmitting}
        />
        <button 
          type="submit" 
          className={styles.substackSubscribeButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {status === 'success' && (
        <div className={styles.substackSubscribeSuccess}>
          Thanks for subscribing! Check your inbox to confirm your subscription.
        </div>
      )}
      
      {status === 'error' && (
        <div className={styles.substackSubscribeError}>
          Please enter a valid email address.
        </div>
      )}
    </div>
  );
} 