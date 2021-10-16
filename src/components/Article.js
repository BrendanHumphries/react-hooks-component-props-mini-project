import React from "react";

function Article({title, date = 'January 1, 1970', preview, minutes}) {
    
    function determineCoffee() {
        const numOfCups = (Math.ceil(minutes / 5) * 5) / 5;
        let cupString = '';
        for (let i = 0; i < numOfCups; i++) {
            cupString = cupString.concat('☕️')
        }
        return cupString;
    }

    function determineBentoBox() {
        const numOfBox = (Math.ceil(minutes / 10) * 10) / 10;
        let boxString = '';
        for (let i = 0; i < numOfBox; i++) {
            boxString = boxString.concat('🍱')
        }
        return boxString;
    }
    
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} | {
                    minutes < 30 ? `${determineCoffee()} ${minutes} min read` : `${determineBentoBox()} ${minutes} min read`
                }
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;


// ☕️ 🍱