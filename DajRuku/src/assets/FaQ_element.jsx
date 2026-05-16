
const FAQ = ({ question, answer }) => {

    return (
        <div className="faq_container">
            <p><strong>Pitanje: </strong> {question}</p>
            <p><strong>Odgovor:</strong> {answer}</p>
        </div>
    );
};

export default FAQ;