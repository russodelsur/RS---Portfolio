import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack'

// Class "User" created below:
class User{
  // Constructor with all properties.
  constructor(name, surname, dob, address, country, email, telephone, company, profile_picture, shoppingCart){
  this.name = name;
  this.surname = surname;
  this.dob = dob;
  this.address = address;
  this.country = country;
  this.email = email;
  this.telephone = telephone;
  this.company = company;
  this.profile_picture = profile_picture;
  this.shoppingCart = shoppingCart;
  }
  
// Getter method to display attributes below:
  // get info() {
  //     return console.log(`The course name is ${this.courseName}, info can be found in ${this.contactWebsite}`);
  // }
}

let users = [];

const raul = new User("Raul", "Gonzales", "28/11/1992", "7 Mast Road, SE18 9JF", "Spain", "raulgonzalez@gmail.com", "07490445682", "Real madrid", "https://assets.laliga.com/assets/2020/01/29/xlarge/dbea6584e412140651160912_rep_raul_gonzalez_045.jpeg", ["Mbappe", "Carvajal", "Messi"])

users.push(raul);

const Shopping = ({shopping: {shoppingCart}, index}) => {
  return(
    <p>{shoppingCart}</p>
)}

const Element = ({ user: { name, surname, dob, address, country, email, telephone, company,
  profile_picture, shoppingCart }, index }) => {
    return (  
      <div className="container-sm" id={index}>
        <Stack gap={3}>
          <div className='card'>
          <h1 className="bg-light border">{name} {surname}</h1>
          <h6 className='bg-light border'>{dob}</h6>
          <h6 className='bg-light border'>{address}</h6>
          <h6 className='bg-light border'>Email: {email}</h6>
          <h6 className='bg-light border'>Telephone: {telephone}</h6>
          <h3 className='bg-light border'>Lives in {country}</h3>
          <h3 className='bg-light border'>Works at {company}</h3>
          <h3>Shopping cart:</h3>
          {console.log(users[index].shoppingCart)}
          {users[index].shoppingCart.map((item, index) => (
          <Shopping key={index} index={index} user={item} />
          ))}
          <div ><img className="card-img-bottom" src={profile_picture} alt="post" /></div>
          </div>
        </Stack>
      </div>
    );
  };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {users.map((user, index) => (
        <Element key={index} index={index} user={user} />
      ))}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
