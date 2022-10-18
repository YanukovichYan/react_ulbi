import React, {useState} from 'react';

export const About = () => {
const [data, setData] = useState({})
    console.log(data)
    function validForm(e) {
        e.preventDefault()
        const formData = {
            name: e.target.username.value,
            lastname: e.target.lastname.value,
            number: e.target.select.value,
        }
        setData(formData)

        console.log(e.target.username.value)
        console.log(e.target.lastname.value)
        // console.log(e.target.twenty.value)
        // console.log(e.target.thirty.value)
        // console.log(e.target.fourty.value)
        // console.log(e.target.age.value)
        console.log(e.target.select.value)
    }

    return (
        <>
            <h1>
                Страница About
            </h1>
            <form onSubmit={validForm}>
                <input type="text" name="username" placeholder="name"/>
                <input type="text" name="lastname" placeholder="lastname"/>
                <div>
                    Сколько вам лет?
                    <label>
                        20
                        <input name="twenty" type="checkbox"></input>
                    </label>
                    <label>
                        30
                        <input name="thirty" type="checkbox"></input>
                    </label>
                    <label>
                        40
                        <input name="fourty" type="checkbox"></input>
                    </label>
                </div>
                <div>
                    Сколько вам лет?
                    <label>
                        1
                        <input name="age" type="radio"></input>
                    </label>
                    <label>
                        2
                        <input name="age" type="radio"></input>
                    </label>
                    <label>
                        3
                        <input name="age" type="radio"></input>
                    </label>
                </div>

                <select name="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button>Отправить</button>
            </form>
        </>
    );
};

