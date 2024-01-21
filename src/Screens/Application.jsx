import { useEffect, useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../Firebase/Firebase'


function Application() {
  const [toDoData, SettoDoData] = useState("")
  const addToDoHandler = async () => {
    // console.log("adhogay");
    try {
      await addDoc(collection(db, "ToDo"), {
        todo: toDoData
      })

    } catch (error) {
      console.log("addTodoerror", error);
    }

    useEffect(() => {
      getData()
    }, [])
    const getData = () => {

    }


  }
  // console.log(toDoData)
  return (
    <>
      <Stack>
        <TextField onChange={(e) => SettoDoData(e.target.value)} />
        <Button onClick={addToDoHandler}>Add</Button>

      </Stack>
    </>
  )
}

export default Application
