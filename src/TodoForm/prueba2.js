

import React from 'react'

const BadgeForm = ({
    onChange, 
    formValues: {firstName, lastName, email, jobTitle, twitter}
}) => {

    const handleClick = e => {
        console.log('Button was clicked')
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log('Form was submitted')
        console.log(firstName, lastName, email, jobTitle, twitter)
    }

    return <div className="">
        <h1>New Attendant</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">First Name {firstName}</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={firstName}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={lastName}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Job Title</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="jobTitle"
                    value={jobTitle}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Twitter</label>
                <input
                    onChange={onChange}
                    className="form-control"
                    type="text"
                    name="twitter"
                    value={twitter}
                />
            </div>

            <button onClick={handleClick} className="btn btn-primary">
                Save
            </button>
        </form>
    </div>
}

export default BadgeForm