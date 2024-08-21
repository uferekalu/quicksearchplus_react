import React, { useEffect, useRef, useState } from 'react'
import '../home/home.css'
import SearchOptions from './SearchOptions'
import { performGoogleAndScholarSearch } from '../../utils/performGoogleAndScholarSearch'
import RenderSearchedResult from './RenderSearchedResult'

const Home = ({ openInNewTab }) => {
  const [inputClick, setInputClick] = useState(false)
  const [showGoogleOrScholarIcon, setShowGoogleOrScholarIcon] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [searchedResult, setSearchedResult] = useState(null)
  const inputRef = useRef(null)

  console.log(searchedResult)

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleInputClick = () => {
    setInputClick(true)
    setShowGoogleOrScholarIcon(true)
  }

  const handleOutsideInputClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setInputClick(false)
    }
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    await performGoogleAndScholarSearch(
      inputValue,
      setIsLoading,
      setSearchedResult,
      currentPage,
    )
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideInputClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideInputClick)
    }
  }, [])

  return (
    <div className="home">
      <div className="action_container">
        <div className="inputHolder">
          {inputClick && (
            <SearchOptions
              showGoogleOrScholarIcon={showGoogleOrScholarIcon}
              ref={inputRef}
            />
          )}
          <input
            ref={inputRef}
            type="text"
            id="google-search-input"
            placeholder="Search the web..."
            onClick={handleInputClick}
            onChange={handleInputChange}
          />
          <button
            className="search-btn ripple-button"
            id="submite"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {!isLoading && (
              <i className="fa-solid fa-magnifying-glass google__search"></i>
            )}
            {isLoading && (
              <span className="load__spinner">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                    opacity="0.5"
                  />
                  <path
                    fill="currentColor"
                    d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="1s"
                      from="0 12 12"
                      repeatCount="indefinite"
                      to="360 12 12"
                      type="rotate"
                    />
                  </path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="saveTabsFavouriteHolder">
        <div className="saveTabsHolder">
          <span id="tab-btn">
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5C0 3.67392 0.566293 2.40215 1.5743 1.46447C2.58231 0.526784 3.94946 0 5.375 0H24.725C26.1505 0 27.5177 0.526784 28.5257 1.46447C29.5337 2.40215 30.1 3.67392 30.1 5V13.2C29.084 12.716 27.9976 12.3723 26.875 12.18V5C26.875 4.46957 26.6485 3.96086 26.2453 3.58579C25.8421 3.21071 25.2952 3 24.725 3H5.375C4.80478 3 4.25792 3.21071 3.85472 3.58579C3.45152 3.96086 3.225 4.46957 3.225 5V23C3.225 23.5304 3.45152 24.0391 3.85472 24.4142C4.25792 24.7893 4.80478 25 5.375 25H13.0935C13.3003 26.0443 13.6696 27.0549 14.19 28H5.375C3.94946 28 2.58231 27.4732 1.5743 26.5355C0.566293 25.5979 0 24.3261 0 23V5ZM34.4 23C34.4 25.3869 33.3807 27.6761 31.5663 29.364C29.7518 31.0518 27.291 32 24.725 32C22.159 32 19.6982 31.0518 17.8837 29.364C16.0693 27.6761 15.05 25.3869 15.05 23C15.05 20.6131 16.0693 18.3239 17.8837 16.636C19.6982 14.9482 22.159 14 24.725 14C27.291 14 29.7518 14.9482 31.5663 16.636C33.3807 18.3239 34.4 20.6131 34.4 23ZM25.8 19C25.8 18.7348 25.6867 18.4804 25.4851 18.2929C25.2835 18.1054 25.0101 18 24.725 18C24.4399 18 24.1665 18.1054 23.9649 18.2929C23.7633 18.4804 23.65 18.7348 23.65 19V22H20.425C20.1399 22 19.8665 22.1054 19.6649 22.2929C19.4633 22.4804 19.35 22.7348 19.35 23C19.35 23.2652 19.4633 23.5196 19.6649 23.7071C19.8665 23.8946 20.1399 24 20.425 24H23.65V27C23.65 27.2652 23.7633 27.5196 23.9649 27.7071C24.1665 27.8946 24.4399 28 24.725 28C25.0101 28 25.2835 27.8946 25.4851 27.7071C25.6867 27.5196 25.8 27.2652 25.8 27V24H29.025C29.3101 24 29.5835 23.8946 29.7851 23.7071C29.9867 23.5196 30.1 23.2652 30.1 23C30.1 22.7348 29.9867 22.4804 29.7851 22.2929C29.5835 22.1054 29.3101 22 29.025 22H25.8V19Z"
                fill="url(#paint0_linear_121_105)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_121_105"
                  x1="17.2"
                  y1="0"
                  x2="17.2"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#034AA6" />
                  <stop offset="1" stopColor="#3F88DD" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="saveTab">save tab</span>
        </div>
        <div className="tabsHolder">
          <span id="save-all-tabs">
            <svg
              width="35"
              height="32"
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.08235 0C5.74067 0 4.45394 0.495797 3.50522 1.37832C2.55651 2.26085 2.02353 3.4578 2.02353 4.70588V15.5426C2.64772 15.0632 3.32624 14.6485 4.04706 14.3059V4.70588C4.04706 3.95704 4.36685 3.23886 4.93608 2.70935C5.5053 2.17983 6.27734 1.88235 7.08235 1.88235H10.1176V4.70588C10.1176 5.45473 10.4374 6.1729 11.0067 6.70242C11.5759 7.23193 12.3479 7.52941 13.1529 7.52941H26.3059V19.7647C26.3059 20.5136 25.9861 21.2317 25.4169 21.7612C24.8476 22.2908 24.0756 22.5882 23.2706 22.5882H20.1908C20.2513 23.2144 20.2513 23.8444 20.1908 24.4706H23.2706C24.6123 24.4706 25.899 23.9748 26.8477 23.0923C27.7964 22.2097 28.3294 21.0128 28.3294 19.7647V4.70588C28.3294 3.4578 27.7964 2.26085 26.8477 1.37832C25.899 0.495797 24.6123 0 23.2706 0H7.08235ZM26.3059 30.1176H17.6917C18.2037 29.5398 18.6509 28.9092 19.0212 28.2353H26.3059C27.9159 28.2353 29.46 27.6403 30.5984 26.5813C31.7369 25.5223 32.3765 24.0859 32.3765 22.5882V10.3529C32.3768 9.7688 32.1824 9.19894 31.8199 8.7219C31.4575 8.24486 30.945 7.88413 30.3529 7.68941V5.74118C31.4956 5.95815 32.5226 6.5357 33.2601 7.37609C33.9975 8.21648 34.4002 9.26809 34.4 10.3529V22.5882C34.4 24.5852 33.5472 26.5003 32.0293 27.9123C30.5113 29.3244 28.4526 30.1176 26.3059 30.1176ZM26.3059 4.70588V5.64706H13.1529C12.8846 5.64706 12.6273 5.5479 12.4375 5.37139C12.2478 5.19489 12.1412 4.9555 12.1412 4.70588V1.88235H23.2706C24.0756 1.88235 24.8476 2.17983 25.4169 2.70935C25.9861 3.23886 26.3059 3.95704 26.3059 4.70588ZM18.2118 23.5294C18.2118 25.776 17.2524 27.9305 15.5447 29.519C13.837 31.1076 11.5209 32 9.10588 32C6.69085 32 4.37474 31.1076 2.66705 29.519C0.959367 27.9305 0 25.776 0 23.5294C0 21.2829 0.959367 19.1283 2.66705 17.5398C4.37474 15.9513 6.69085 15.0588 9.10588 15.0588C11.5209 15.0588 13.837 15.9513 15.5447 17.5398C17.2524 19.1283 18.2118 21.2829 18.2118 23.5294ZM10.1176 19.7647C10.1176 19.5151 10.0111 19.2757 9.82131 19.0992C9.63157 18.9227 9.37422 18.8235 9.10588 18.8235C8.83755 18.8235 8.5802 18.9227 8.39046 19.0992C8.20072 19.2757 8.09412 19.5151 8.09412 19.7647V22.5882H5.05882C4.79049 22.5882 4.53314 22.6874 4.3434 22.8639C4.15366 23.0404 4.04706 23.2798 4.04706 23.5294C4.04706 23.779 4.15366 24.0184 4.3434 24.1949C4.53314 24.3714 4.79049 24.4706 5.05882 24.4706H8.09412V27.2941C8.09412 27.5437 8.20072 27.7831 8.39046 27.9596C8.5802 28.1361 8.83755 28.2353 9.10588 28.2353C9.37422 28.2353 9.63157 28.1361 9.82131 27.9596C10.0111 27.7831 10.1176 27.5437 10.1176 27.2941V24.4706H13.1529C13.4213 24.4706 13.6786 24.3714 13.8684 24.1949C14.0581 24.0184 14.1647 23.779 14.1647 23.5294C14.1647 23.2798 14.0581 23.0404 13.8684 22.8639C13.6786 22.6874 13.4213 22.5882 13.1529 22.5882H10.1176V19.7647Z"
                fill="url(#paint0_linear_121_103)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_121_103"
                  x1="17.2"
                  y1="0"
                  x2="17.2"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#034AA6" />
                  <stop offset="1" stopColor="#3F88DD" />
                </linearGradient>
              </defs>
            </svg>
          </span>

          <span className="tabs">tabs</span>
        </div>
      </div>
      <div className="filterCollectionHolder">
        <div className="collection__cont">
          <select className="collections">Bookmark folders</select>

          <span id="openModalBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M3.5 6.25V8h4.629a.75.75 0 0 0 .53-.22l1.53-1.53l-1.53-1.53a.75.75 0 0 0-.53-.22H5.25A1.75 1.75 0 0 0 3.5 6.25m-1.5 0A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659L11.562 5.5h7.189A3.25 3.25 0 0 1 22 8.75v4.06a6.518 6.518 0 0 0-1.5-1.078V8.75A1.75 1.75 0 0 0 18.75 7h-7.19L9.72 8.841a2.25 2.25 0 0 1-1.591.659H3.5v8.25c0 .966.784 1.75 1.75 1.75h6.063c.173.534.412 1.037.709 1.5H5.25A3.25 3.25 0 0 1 2 17.75zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"
              />
            </svg>
          </span>
        </div>
      </div>
      <p id="selectedCollection" className="selectedCollection"></p>
      <div className="searchResultsHolder">
        <div id="search-results">
          {new Array(7).fill(null).map((data, index) => (
            <RenderSearchedResult key={index} openInNewTab={openInNewTab}/>
          ))}
        </div>

        <div id="pagination-container"></div>
      </div>
    </div>
  )
}

export default Home
