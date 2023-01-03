import React, { useState } from 'react'
import styled from 'styled-components'

const GoalCard = styled.ul`
& li {
  list-style-type: none;
}

  margin: 1rem;
`

const goals = [
  {
    goalName: 'Learning',
    isCompleted: false,
    deadline: '2023.03.31.',
    notes: 'do it every day'
  },
  {
    goalName: 'Work',
    isCompleted: false,
    deadline: '2023.03.31.',
    notes: 'do it every day'
  },
  {
    goalName: 'Sport',
    isCompleted: false,
    deadline: '2023.03.31.',
    notes: 'do it every day'
  },
  {
    goalName: 'Diet',
    isCompleted: true,
    deadline: '2023.03.31.',
    notes: 'do it every day'
  }
]

const MainList = () => {
  const [goalList, setGoalList] = useState(goals)

  console.log(goalList)
  return (
    <>
      <div>Main List</div>
      <ul>
        {
        goalList.map(
          (goal, i) => (
              <GoalCard key={i}>
                <li>Name: {goal.goalName}</li>
                <li>isCompleted: {goal.isCompleted? "Done" : "Pending"} 
                  <input 
                    checked={goal.isCompleted}
                    onChange={() => setGoalList(old => {
                      old[i] = { ...goal, isCompleted: !goal.isCompleted }
                      return [...old]
                    })}
                    type="checkbox" 
                  />
                </li>
                <li>Deadline: {goal.deadline}</li>
                <li>Notes: {goal.notes}</li>
              </GoalCard>
            )
          )
        }
      </ul>
    </>
  )
}

const adder = (a, b) => {
  return a + b
}

const subtractor = (a, b) => {
  return a - b
}

export default MainList;
export { adder, subtractor }
// export is when you export the contents of the file to another file.
// and if you wanna access the export you have to import it in the other file 
