import React, { forwardRef, useEffect, useState } from 'react'

const SearchOptions = forwardRef(({ showGoogleOrScholarIcon }, ref) => {
  const [showGoogleIcon, setShowGoogleIcon] = useState(false)
  const [showGoogleScholarIcon, setShowGoogleScholarIcon] = useState(false)
  const [showSearchOptions, setShowSearchOptions] = useState(false)

  const handleGoogleOption = () => {
    chrome.storage.local.set(
      { isGoogle: true, isGoogleScholar: false },
      function () {
        setShowGoogleIcon(true)
        setShowGoogleScholarIcon(false)
        setShowSearchOptions(false)
      },
    )
  }

  const handleGoogleScholarOption = () => {
    chrome.storage.local.set(
      { isGoogleScholar: true, isGoogle: false },
      function () {
        setShowGoogleScholarIcon(true)
        setShowGoogleIcon(false)
        setShowSearchOptions(false)
      },
    )
  }

  const handleShowSearchOptions = () => {
    setShowSearchOptions(!showSearchOptions)
  }

  useEffect(() => {
    chrome.storage.local.get(['isGoogle', 'isGoogleScholar'], function (data) {
      const isGoogle = data.isGoogle
      const isGoogleScholar = data.isGoogleScholar

      if (isGoogle) {
        setShowGoogleIcon(true)
        setShowGoogleScholarIcon(false)
      } else if (isGoogleScholar) {
        setShowGoogleScholarIcon(true)
        setShowGoogleIcon(false)
      } else {
        setShowGoogleIcon(true)
      }
    })
  }, [])
  return (
    <div ref={ref}>
      {showGoogleOrScholarIcon && (
        <div className="searchOptionsHolder">
          <div className="searchOptionsContentHolder">
            <div className="searchOptionsHolderGoogle">
              {showGoogleIcon && (
                <div
                  style={{
                    display: 'flex',
                    marginLeft: '5px',
                  }}
                  onClick={handleShowSearchOptions}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 128 128"
                    className="searchOptionsHolderGoogleIcon"
                  >
                    <path
                      fill="#fff"
                      d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                    />
                    <path
                      fill="#e33629"
                      d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                    />
                    <path
                      fill="#f8bd00"
                      d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                    />
                    <path
                      fill="#587dbd"
                      d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                    />
                    <path
                      fill="#319f43"
                      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    className="searchOptionsHolderGoogleCaretIcon"
                  >
                    <path
                      fill="rgba(3, 74, 166, 1)"
                      fillRule="evenodd"
                      d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
              {showGoogleScholarIcon && (
                <div
                  style={{
                    display: 'flex',
                    marginLeft: '5px',
                  }}
                  onClick={handleShowSearchOptions}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 512 512"
                    className="searchOptionsHolderGoogleScholarIcon"
                  >
                    <path
                      fill="rgb(64,130,239)"
                      d="M390.9 298.5s0 .1.1.1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64c1.7-3.6 3.6-7.2 5.6-10.7q6.6-11.4 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7L256 0l256 202.7l-94.7 77.1z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                    className="searchOptionsHolderGoogleCaretIcon"
                  >
                    <path
                      fill="rgba(3, 74, 166, 1)"
                      fillRule="evenodd"
                      d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {showGoogleOrScholarIcon && showSearchOptions && (
        <div className="searchOptionsGoogleAndScholar">
          <div className="searchOptionsContainer">
            <div
              className="searchOptionsWithGoogleHolder"
              onClick={handleGoogleOption}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 128 128"
                className="searchOptionsWithGoogleHolderIcon"
              >
                <path
                  fill="#fff"
                  d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"
                />
                <path
                  fill="#e33629"
                  d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"
                />
                <path
                  fill="#f8bd00"
                  d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"
                />
                <path
                  fill="#587dbd"
                  d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"
                />
                <path
                  fill="#319f43"
                  d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"
                />
              </svg>
              <span className="searchOptionsWithGoogleText">Google</span>
            </div>
            <div
              className="searchOptionsWithMainGoogleScholarHolder"
              onClick={handleGoogleScholarOption}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 512 512"
                className="searchOptionsWithMainGoogleScholarHolderIcon"
              >
                <path
                  fill="rgb(64,130,239)"
                  d="M390.9 298.5s0 .1.1.1c9.2 19.4 14.4 41.1 14.4 64C405.3 445.1 338.5 512 256 512s-149.3-66.9-149.3-149.3c0-22.9 5.2-44.6 14.4-64c1.7-3.6 3.6-7.2 5.6-10.7q6.6-11.4 15-21.3c27.4-32.6 68.5-53.3 114.4-53.3c33.6 0 64.6 11.1 89.6 29.9c9.1 6.9 17.4 14.7 24.8 23.5c5.6 6.6 10.6 13.8 15 21.3c2 3.4 3.8 7 5.5 10.5zm26.4-18.8c-30.1-58.4-91-98.4-161.3-98.4s-131.2 40-161.3 98.4L0 202.7L256 0l256 202.7l-94.7 77.1z"
                />
              </svg>
              <span className="searchOptionsMainWithGoogleScholarText">
                Google Scholar
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
})

export default SearchOptions
