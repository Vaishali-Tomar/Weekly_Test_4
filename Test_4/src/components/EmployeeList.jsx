import React from 'react'
import { useState } from 'react'

const employees = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'David', age: 28 },
  ];

const EmployeeList = () => {

    const [team, setTeam] = useState([]);
    const [availableEmployees, setAvailableEmployees] = useState(employees);

    const addToTeam = (employee) =>{
     setTeam([...team, employee]);
     setAvailableEmployees(availableEmployees.map(emp => emp.id === employee.id ? {...emp, added:true} : emp))

    }

    const removeFromTeam = (employee) =>{
        setTeam(team.filter(emp => emp.id !== employee.id));
        setAvailableEmployees(availableEmployees.map(emp => emp.id === employee.id ? {...emp, added:false} : emp)); 
    };

    const averageAge = () => {
        if(team.length === 0) return 0;
        const totalAge = team.reduce((sum, emp) => sum + emp.age, 0);
        return (totalAge / team.length).toFixed(2);

    }

    const sortTeamByAge = () =>{
        setTeam([...team].sort((a,b) => a.age-b.age));
    }
  return (
    <div className="flex p-4 border-black bg-slate-400 w-2/5 justify-center items-center rounded-md m-6 font-serif font-bold text-lg ml-55">
      <div className="w-1/2 p-2 border-r-2">
        <h2 className="text-xl mb-4">Employees</h2>
        <ul>
          {availableEmployees.map(employee => (
            <li key={employee.id} className={`mb-2 p-2 ${employee.added ? 'text-gray-400' : ''}`}>
              {employee.name} - Age: {employee.age}
              {!employee.added && (
                <button
                  className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => addToTeam(employee)}
                >
                  ADD
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 p-2">
        <h2 className="text-xl mb-4">Team Members</h2>
        <ul>
          {team.map(employee => (
            <li key={employee.id} className="mb-2 p-2">
              {employee.name} - Age: {employee.age}
              <button
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeFromTeam(employee)}
              >
                REMOVE
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p>Average Age: {averageAge()}</p>
          <button
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            onClick={sortTeamByAge}
          >
            SORT BY AGE
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeList
