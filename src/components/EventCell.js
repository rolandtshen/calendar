import React from 'react';

function EventCell() {
    return (
        <div className="event">
            <h2>Event title</h2>
            <p className="createdAt">Created at: date</p>
            <div className="event-bottom">
                <p>6 people</p>
                <button>
                    Edit
                </button>
                <button>
                    Info
                </button>
            </div>
        </div>
    );
}

export default EventCell;