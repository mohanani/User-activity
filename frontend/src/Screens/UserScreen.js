import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker';


Modal.setAppElement('#root');

function UserScreen(props) {


    const [members, setMembers] = useState([]);
    const [modelIsOpen, setModalIsOpen] = useState(false);
    const [value, onChange] = useState(new Date());


    useEffect(() => {
        axios.get("http://localhost:3000/members")
          .then(res => {
              setMembers(res.data);
          })
          .catch(err => {
          })
        }, [])

    return <div>
        <ul className="users">
        {
           members.map(member => 
               <li key={member.id}>
                 <div className="member">
                     <div className="member-id">Id: &nbsp; {member.id}</div>

                     <button onClick = {() => setModalIsOpen(true)} className="member-name">Name: &nbsp; {member.real_name}</button>                     
                    
                     <Modal isOpen={modelIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                     <div className="time-ranges">{member.activity_periods.map(activity_period => (<div>{activity_period.start_time} &nbsp; &nbsp;  &nbsp; {activity_period.end_time}</div>))}
                     </div>
                     <br></br><Calendar onChange={onChange} value={value}/>
                     <DateTimePicker onChange={onChange} value={value}/>
                     <br></br><button onClick = {() => setModalIsOpen(false)}>Go back</button>
                     </Modal>

                     <div className="member-loc">Location: &nbsp; {member.tz}</div>
                 </div>
               </li>
           )
        }
        </ul>
    </div>
}



export default UserScreen;
