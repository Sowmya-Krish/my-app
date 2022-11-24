import logo from './logo.svg';
import './App.css';

function App() { 
  const names =["Sowmi","Sammu","Kannan","saba"]
  const users =[
    {
  name : "Sowmi",
  content :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
  {
  name : "Sammu",
  pic :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
  {
  name : "Kannan",
  pic :'https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg',
  },
];
  return (
     <div className = "App">
      {/* /*<User name = "Sowmi"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Sammu"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/>
      <User name = " Kannan"
      pic ='https://www.pinkvilla.com/imageresize/when_thalapathy_vijay_turned_down_the_offer_to_act_in_this_superhit_movie_of_director_shankar.jpg?width=752&t=pvorg' alt=""/> */}
    
    {users.map((usr) => (
    <User name={usr.name} content={usr.cont} />
    ))}
    </div>
  );
 }

 function Welcome({name}){
 
    return( <section>
   <h1 className  = "user-name">
    hello, <span className="user-iname">{name}</span>
   </h1>
    </section>
    )
    }
 function User({content,name}) {

  return ( 
  <section>
  <span className="user-profile-pic" src = {content} alt={name}/>
   <h1 className="user-name">
    Hello, <span className ="user-iname">{name}</span>
   </h1>
  </section>
  );
 }
export default App;
