import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNotes } from '../context/Notes-Context';

function AddNode() {

    //const ob=useNotes()
    //const [notes,setNotes]=useNotes();

    const { notes, setNotes } = useNotes();

    const [status, setStatus] = useState([
        {
            id: -1,
            value: "Select your notes here",
        },
        {
            id: 0,
            value: "New",
        },
        {
            id: 1,
            value: "In progress",
        },
        {
            id: 2,
            value: " Complete ",
        },
        {
            id: 3,
            value: "On Hold",
        },
        {
            id: 4,
            value: "Cencelled",
        },
        {
            id: 5,
            value: "Rejected ",
        },
        {
            id: 6,
            value: "done",
        },


    ]);

    const [formData, setformData] = useState({
        id: -1,
        title: "",
        content: "",
        statusId: -1,
        date: "",
        error: false,
        errorData: null,
    });

    function handleFrom(event) {
        // default behaivior of fomr submit ka
        event.preventDefault();
        // console.log(event);
        // console.log(event.target.title.value);
        // console.log(event.target.content.value);
        // console.log(formData);
        // toast.success("Note Added Successfully . . . .");

        // use validation
        if (formData.title == "") {
            toast.error("Note title is required");
            return;
        }
        else if (formData.content == "") {
            toast.error("Note content is required..");
            return;

        }
        else if (formData.statusId == -1) {
            toast.error("form id is required ..");
            return;
        } else if (formData.date == "") {
            toast.error("Date is required...");
            return;
        } else

            toast.success(" Successed .....");



        // set data into set file
        console.log(formData);
        //setNotes([...notes,formData])

        //ob.setNotes([...ob.notes,formData]);
        formData.id = Math.round(Math.random() * 100000);
        setNotes([...notes, formData]);

    }




    // create values change function
    function valueChange(event) {
        // console.log(event.target.name);
        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }
    return (
        <div className=' field_Container flex justify-center  border bg-gray-800 rounded shadow flex-col items-center mt:10 md:mt-20'>
            <h1 className='text-3xl'>Add Notes : </h1>
            <p>This is your add notes file your can Add notes here..</p>
            <p>you can also delete your file from here </p>

            <form noValidate onSubmit={handleFrom} className='w-full md:w-1/3  flex-col gap-3 '>
                {/* titled field  */}
                <div className='field_Container'>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium
              dark:text-white-900
                dark:text-gray-900 ">
                        Title
                    </label>
                    <input type="text" id="title" name='title' onChange={valueChange}
                        className="bg-gray-50 border border-gray-300 
    text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
      dark:bg-gray-700 dark:border-gray-600
       dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your title here"
                        value={formData.title}
                        required />
                </div>
                {/* Messege box */}
                <div className='field_Container mt-2'  >

                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                    >Your Notes </label>
                    <textarea
                        onChange={valueChange}
                        name='content'
                        id="content" rows="4"
                        value={formData.content}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                </div>

                {/*  status field */}
                <div className="field_Container">
                    <label htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-white-900 mt-2 dark:text-gray-900">Choose a Notes status</label>
                    <select
                        name="statusId"
                        typeof='status'
                        value={formData.statusId}
                        onChange={valueChange}
                        id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                        {
                            status.map((stat) => (
                                <option disabled={stat.id == -1} key={stat.id} value={stat.id}>
                                    {stat.value}</option>
                            ))
                        }
                    </select>

                </div>

                {/* date fields  */}
                <div className="field_Container">
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-white-900 dark:text-white"
                    >Select Date</label>
                    <input type="date" id="date"
                        name="date"
                        value={formData.data}
                        onChange={valueChange}
                        className="bg-gray-50 border border-gray-300 
    text-gray-900 text-sm rounded-lg
     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
      dark:bg-gray-700 dark:border-gray-600
       dark:placeholder-gray-400 dark:text-white
        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your title here" required />

                </div>
                {/* buttons  */}
                <div className='Button_file flex justify-center gap-2'>
                    <button type="submit"
                        className="text-white bg-indigo-300 mt-2 hover:bg-indigo-900 
                    focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 
                    py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none
                     dark:focus:ring-blue-800">Add-Note</button>
                    <button type="button"
                        className="text-white bg-indigo-300 mt-2 hover:bg-indigo-900 
                    focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg 
                    text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700
                     dark:focus:ring-gray-700 dark:border-gray-700"
                        onClick={() => {
                            setformData(
                                {
                                    title: "",
                                    content: "",
                                    statusId: "-1",
                                    date: "",
                                }
                            );
                        }}
                    >Clear-Notes</button>

                </div>

            </form>

            {/* <h1>Notes Length : {notes.length}</h1> */}

            {/* {
                JSON.stringify(formData)
            } */}

        </div>
    )
}

export default AddNode
