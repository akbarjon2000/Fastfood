import React from 'react'
import { AddContainer } from './AddStyle'
import { MyCatalogContext } from "../../context/catalogContext"
import { ReactComponent as Upload } from "../../assets/icon/upload-cloud.svg"

export const AddNotify = ({ onNotify }) => {
    const onSave = (e) => {
        e.preventDefault()

    }
    return (
        <AddContainer>
            <form>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <input type="text" placeholder="Title" className="title" required />
                    <div className='category'>
                        <select className='select' required>
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                        <select className='select' required>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                            <option>Thoursday</option>
                            <option>Friday</option>
                            <option>Saturday</option>
                            <option>Sunday</option>
                        </select>
                        <input type="time" required placeholder="time" style={{ flex: "1", border: "none", outline: "none", backgroundColor: "inherit" }} />
                    </div>
                </div>
                <textarea className='caption' placeholder='Captions Here' required></textarea>
                <label htmlFor='upload' className='label'>
                    <Upload style={{ width: "66px", height: "60px", color: "#03053D", marginBottom: "14px" }} />
                    <p className='uploadImage'>Upload Image</p>
                </label>
                <input required type="file" id='upload' accepts="image/*" style={{ display: "none" }} />
            </form>
            <div style={{ display: "flex", width: "100%", justifyContent: 'flex-end', paddingTop: "40px" }}>
                <button className='cancel' onClick={onNotify}>Cancel</button>
                <button className='save' type='submit' onClick={(e) => onSave(e)}>Save</button>
            </div>
        </AddContainer>
    )
}
