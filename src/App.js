import Header from './components/Header'

import initialEmails from './data/emails'

import './App.css'

import { useState } from 'react'

function App() {
  const [emails, setEmails] = useState(initialEmails)
  console.log(emails)
  console.log('setEmails', setEmails)

  const toggleRead = targetEmail => {
    console.log('Inside toggleRead: ', targetEmail, emails)

    // const updatedEmail = {
    //   ...targetEmail,
    //   read: false
    // }

    const updatedEmails = emails.map(email => {
      // console.log('Inside toggleRead Map: ', email, targetEmail)

      if (email.id === targetEmail.id) {
        // console.log('Found email: ', email, targetEmail.read)

        // New problem: the email.read is only going to false
        // Solution: make the value assignment work from targetEmail
        const updatedEmail = {
          ...targetEmail,
          read: !targetEmail.read
        }

        // console.log(updatedEmail)

        return updatedEmail
      } else {
        return email
      }
    })

    // console.log(updatedEmails)

    // setEmails(updatedEmails)
  }

  const toggleStar = targetEmail => {
    // console.log('Inside toggleStar: ', targetEmail, emails)

    const updatedEmails = emails.map(email => {
      // console.log('Inside toggleStar Map: ', email, targetEmail)

      if (email.id === targetEmail.id) {
        // console.log('Found email: ', email, targetEmail.read)

        const updatedEmail = {
          ...targetEmail,
          starred: !targetEmail.starred
        }

        // console.log(updatedEmail)

        return updatedEmail
      } else {
        return email
      }
    })

    // console.log(updatedEmails)

    setEmails(updatedEmails)
  }

  const toggleHide = targetEmail => {
    const filterRead = emails.filter(email => email.read === false)
    // console.log('filteredRead:', filterRead)
    const test = []
    // console.log('Inside toggleRead: ', targetEmail, emails)
    if (targetEmail.read === false) {
      return (test = filterRead)
    } else {
      return (test = email)
    }
    setEmails(test)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              onChange={() => toggleHide(email)}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {/* Render a list of emails here */}
        <ul>
          {emails.map(email => {
            // console.log('Inside Map: ', email)

            return (
              <li className="email">
                <div className="select">
                  <input
                    className="select-checkbox"
                    type="checkbox"
                    checked={email.read}
                    onChange={() => toggleRead(email)}
                  />
                </div>
                <div className="star">
                  <input
                    className="star-checkbox"
                    type="checkbox"
                    checked={email.starred}
                    onChange={() => toggleStar(email)}
                  />
                </div>
                <div className="sender">{email.sender}</div>
                <div className="title">{email.title}</div>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default App
