import './education.css';

export function Education() {

    return (
        <div className="education">
            <div><b className='btxtclr'>Освіта</b></div>
            <p></p>
            <div><b>НТУ «Дніпровська політехніка»</b></div>
            <p>Магістр в галузі інформаційних технологій</p>
            <ul className='txtclr'>
                <li>Навчання з вересня 2021
                    року по теперішній час</li>
                <li>Курси спеціалізації в галузі програмування для
                    підвищення кваліфікації</li>
                <li>Літня практика в SoftServe</li>
            </ul>
            <p></p>
            <div><b>Самостійне навнчання</b></div>
            <ul className='txtclr'>
                <li>Повний курс JavaScript +
                    React - з нуля до результату</li>
                <li>Практичний JavaScript
                    (Розширений рівень)</li>
                <li>WEB-розробник 2022</li>
            </ul>
        </div>
    )
}