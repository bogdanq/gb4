export const Message = ({ message }) => {
    var currentDate = new Date().toLocaleString().slice(0,-6);

    return (
    <div>
        <h1>{message.author}</h1>
        <p>{message.message}</p>
        <p>{currentDate}</p>
    </div>
    );
};