import React, { useState } from 'react'

const ResultCard = () => {
    const [result, setResult] = useState({
        username: "",
        hindi: '',
        english: '',
        math: '',
        cprogramming: '',
    });
    const [print, setPrint] = useState([]);
    const handleClick = (e) => {
        const { name, value } = e.target
        setResult({ ...result, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const total = parseInt(result.hindi) + parseInt(result.english) + parseInt(result.math) + parseInt(result.cprogramming);
        const percentage = (total / 400) * 100;
        const fixed = percentage.toFixed();
        var score = fixed;
        if (score > 50) {
            score = "Pass"
        } else {
            score = "Fail"
        }
        const newEntry = { username: result.username, hindi: total, english: fixed, math: score }

        if (result.username.length > 3 && result.hindi.length > 1 && result.english.length > 1 && result.math.length > 1 && result.cprogramming.length > 1) {
            setPrint([...print, newEntry]);
        }
    };
    return (
        <>
            <h5 className='text-center pt-3'>Input Mark</h5>
            <div className='card bg-white p-3'>
                <table className="table table-bordered text-center">
                    <tbody>
                        <tr>
                            <td rowSpan={2} className='text-center' style={{ verticalAlign: "middle" }}>Name</td>
                            <td colSpan={4}>Score</td>
                        </tr>
                        <tr>
                            <td>Hindi</td>
                            <td>English</td>
                            <td>Math</td>
                            <td>C Programming</td>
                        </tr>
                        <tr>
                            <td><input type='text' name="username" value={result.username} onChange={handleClick} className='form-control' /></td>
                            <td><input type='number' name="hindi" value={result.hindi} onChange={handleClick} className='form-control'/></td>
                            <td><input type='number' name="english" value={result.english} onChange={handleClick} className='form-control' /></td>
                            <td><input type='number' name="math" value={result.math} onChange={handleClick} className='form-control'/></td>
                            <td><input type='number' name="cprogramming" value={result.cprogramming} onChange={handleClick} className='form-control'/></td>
                        </tr>
                        <tr>
                            <td colSpan={5}><button className='btn btn-danger' onClick={handleSubmit}>Add to table</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h5 className='text-center pt-3 mt-5'>Student Data</h5>
            <div className='card bg-white p-3  w-75 mx-auto'>
                <table className="table table-bordered text-center">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Total</td>
                            <td>Average</td>
                            <td>Pass Or Fail</td>
                        </tr>

                        {print.map((studentData, id) => (
                            <tr key={id}>
                                <td>{studentData.username}</td>
                                <td>{studentData.hindi}</td>
                                <td>{studentData.english}</td>
                                <td>{studentData.math === "Pass" ? <span style={{color:"green"}}>{studentData.math}</span> :<span style={{color:"red"}}>{studentData.math}</span> }</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ResultCard