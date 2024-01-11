import React from 'react'

export const Dashboard = () => {
  return (
    <nav className="nav-container">
      <section className="options">
        <div className="lateral-btn">
          <button>
            <span className="material-symbols-outlined">
              menu
            </span>
          </button>
          <section className="anchors-cont">
          <li>
            <a href='/' className='items-cont' >
              <span className="material-symbols-outlined item">abc</span>
              {/* <span className="text">Horarios</span> */}
            </a>
          </li>
          <li>
            <a href='/' className='items-cont' >
              <span className="material-symbols-outlined item">swipe_up</span>
              {/* <span className="text">Horarios</span> */}
            </a>
          </li>
          <li>
            <a href='/' className='items-cont' >
              <span className="material-symbols-outlined item">hide</span>
              {/* <span className="text">Horarios</span> */}
            </a>
          </li>
          <li>
            <a href='/' className='items-cont' >
              <span className="material-symbols-outlined item">move_up</span>
              {/* <span className="text">Horarios</span> */}
            </a>
          </li>
          </section>
        </div>
        <div className="logout">

        </div>
      </section>
    </nav>
  )
}
