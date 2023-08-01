import { Component } from "react";
import { RotatingLines } from 'react-loader-spinner'
import '../styles.css'

import { FethItem } from 'Servises/ApiFetch';
import SerchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


export class App extends Component {
  state = {
    query: '',
    page: 1,
    items: [],
    isLoading: false,
    error: null,
    modal: false,
    totalHits: 0,
    largeImg: '',
    tags: '',
  }
  
  getLargeImgURL = (largeImg, tags) => {
    return this.setState({ largeImg, tags, modal: true})
  }

   handleSubmit = query => {
     this.setState({ query: query })
   }

  hadleButtonClick = () => {
    this.setState(state => ({page: state.page + 1})) 
   }
  
  modalToggler = () => {
    return this.setState(({ modal }) => ({
      modal: !modal,
    }))
  }

  
async componentDidUpdate(prevProps, prevState) {

  
  if (prevState.query !== this.state.query) {
    this.setState({ items: [], page: 1, totalHits: 0 });
  }

  if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
    this.setState({ isLoading: true})
    const res = await FethItem(this.state.query, this.state.page);
    this.setState(prevState => ({ items: [...prevState.items, ...res.hits] }));
    this.setState({ isLoading: false });
    if (this.state.page === 1) {
  this.setState({ items: res.hits, totalHits: res.totalHits });
    }
   }
  };
  

  render() {
   
        return (
      <div className="App">
        <SerchBar query={this.handleSubmit} />
        {this.state.isLoading && (
          <Loader>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
            />
            </Loader>
        )}
        <ImageGallery>
          <ImageGalleryItem data={this.state.items} img={this.getLargeImgURL} />
        </ImageGallery>
        {this.state.totalHits > this.state.items.length && <Button click={this.hadleButtonClick} />}
            {this.state.modal && <Modal toggle={this.modalToggler} prop={ this.state.largeImg} prop2={this.state.tags}  />}
      </div>

    );
    }
  }
;
