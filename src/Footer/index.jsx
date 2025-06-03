import React from 'react'

export  function Footer() {
  return (
    <div>
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>© 2023 Your Company Name. All rights reserved.</p>
            <p>Follow us on social media!</p>
            <div>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </div>
        </footer>
    </div>
  )
}
