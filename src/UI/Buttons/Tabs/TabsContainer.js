import './TabsContainer.css'
const TabsContainer = props =>{ 
  return (
    <div className="flex fgf tabs_container">{props.children}</div>
  );
};

export default TabsContainer;