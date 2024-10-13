import React from 'react'

const Sidebar = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div>

      <div className="drawer">

        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <li>
              <ul>Stuff</ul>
              <ul>Stuff 2</ul>
              <ul>Stuff 3</ul>
          </li>
        </div>
      </div>

    </div>
  )
}

export default Sidebar