import React, { Component } from 'react';
import './dashboard.scss';
import {
  addDataToApi,
  getDataFromApi,
  updateDataApi,
  deleteDataApi,
} from '../../../config/redux/action/action';
import { connect } from 'react-redux';

class Dashboard extends Component {
  state = {
    title: '',
    content: '',
    date: '',
    textButton: 'SIMPAN',
    noteId: '',
  };

  componentDidMount() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    this.props.getNotes(userData.uid);
  }

  hanldeSavedNotes = () => {
    const { title, content, textButton, noteId } = this.state;
    const { saveNotes, updateData } = this.props;
    const userData = JSON.parse(localStorage.getItem('userData'));

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid,
    };
    console.log(data);
    if (textButton === 'SIMPAN') {
      saveNotes(data);
    } else {
      data.noteId = this.state.noteId;
      updateData(data);
    }
  };

  updateNotes = (item) => {
    console.log('updateNotes', item);
    this.setState({
      title: item.data.title,
      content: item.data.content,
      textButton: 'UPDATE',
      noteId: item.id,
    });
  };
  cancelUpdate = () => {
    this.setState({
      title: '',
      content: '',
      textButton: 'SIMPAN',
    });
  };
  deleteItems = (e, data) => {
    e.stopPropagation();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const { deleteData } = this.props;
    const newData = {
      userId: userData.uid,
      noteId: data.id,
    };
    console.log('delete', newData);
    deleteData(newData);
  };

  onInputChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  render() {
    const { title, content, date, textButton } = this.state;
    const { notes } = this.props;
    const { updateNotes, cancelUpdate, deleteItems } = this;
    console.log('notes', notes);
    return (
      <div className='container'>
        <div className='input-form'>
          <input
            placeholder='title'
            className='input-title'
            value={title}
            onChange={(e) => this.onInputChange(e, 'title')}
          />
          <textarea
            placeholder='content'
            className='input-content'
            value={content}
            onChange={(e) => this.onInputChange(e, 'content')}
          ></textarea>
          <div className='action-wrapper'>
            {textButton === 'UPDATE' ? (
              <button className='save-btn cancel' onClick={this.cancelUpdate}>
                Cancel
              </button>
            ) : (
              <div></div>
            )}
            <button className='save-btn' onClick={this.hanldeSavedNotes}>
              {textButton}
            </button>
          </div>
        </div>
        <hr />
        {notes.length > 0 ? (
          <>
            {notes.map((item) => (
              <div
                key={item.id}
                className='card-content'
                onClick={() => updateNotes(item)}
              >
                <div
                  className='delete-item'
                  onClick={(e) => deleteItems(e, item)}
                >
                  x
                </div>
                <p className='title'>{item.data.title}</p>
                <p className='date'>{item.data.date}</p>
                <p className='content'>{item.data.content}</p>
              </div>
            ))}
          </>
        ) : null}
      </div>
    );
  }
}

const reduxState = (state) => ({
  // isLoading: state.isLoading,
  userData: state.user,
  notes: state.notes,
});
const reduxDispatch = (dispatch) => ({
  saveNotes: (data) => dispatch(addDataToApi(data)),
  getNotes: (data) => dispatch(getDataFromApi(data)),
  updateData: (data) => dispatch(updateDataApi(data)),
  deleteData: (data) => dispatch(deleteDataApi(data)),
});

export default connect(reduxState, reduxDispatch)(Dashboard);
