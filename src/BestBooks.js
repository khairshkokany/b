import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import Carousel from 'react-bootstrap/Carousel';


class MyFavoriteBooks extends React.Component {

  constructor (props) {

    super(props);
    this.state = {
      books: []
    }
  }

componentDidMount = () => {

  const  {user} = this.props.auth0;

  console.log(this.props.auth0);
  
  axios.get(`http://localhost:3010/books?email=${user.email}`).then(dataResults => {
    this.setState ({
      
      // books:dataResults.data[0].books
      books:dataResults.data
    });
    // console.log(dataResults.data[0].books[0].title);
    // console.log(dataResults.data[0].books.title);
    console.log(dataResults.data);
    
    }).catch(error => (error));
  }
  
  render() {
    // const  {isAuthenticated} = this.props.auth0;
    return(
      <>
      <Jumbotron>

        
        <div>
        <div>
        </div>
        {
          this.state.books.length &&
          <div>
            {
              
              this.state.books.map(books => {
                
                <h1>My books! </h1>
                return (
                  <>

              
                <>

                <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={books.image}
      alt="First slide"
      width ='20px'
    />
    <Carousel.Caption>
    <h3>{books.title}</h3>
                      <p>{books.description}</p>
                      <p>{books.status}</p>
                     {console.log(books.status)} 
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
                 {/* <img
                      className="d-block w-100"
                      src={books.image}
                      alt="Second slide" />
                 
                 <h3>{books.title}</h3>
                      <p>{books.description}</p>
                      <p>{books.status}</p> */}
                      </>

                 </>
                )
              })
            }
          </div>
        }
      </div>
       
  

        {/* {isAuthenticated &&  */}
        <>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        </>
        {/* } */}
      </Jumbotron>
      </>
    )
  }
}

export default withAuth0 (MyFavoriteBooks);
