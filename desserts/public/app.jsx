var MyComponent = React.createClass ({
   render: function(){
       return( 
           <div>
           <h2>This React component is replacing the footer. </h2>
            
       </div>
       );
   } 
});

ReactDOM.render(   
        <MyComponent/>,
    
document.getElementById('react-container'));