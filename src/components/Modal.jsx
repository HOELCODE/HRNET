import { Link } from 'react-router-dom';

const closeModal = () => {
    const modal = document.querySelector('.modal');
    const page = document.querySelector('.home-container');
    const cross = document.querySelector('.close');

    //Actions
    cross.addEventListener('click', () => {
        page.style.filter = "none";
        modal.style.display = "none";
        modal.classList.remove('modal-showed')
    })
}

const modal = () => {
    return (
        <>
            <div className="modal">
                <div className='cross-container' onClick={closeModal}>
                    <span className="close">&times;</span>
                </div>
                <div className="modal-content">
                    <h2>Employee Created!</h2>
                    <Link to="/employee-list" onClick={closeModal}>View update</Link>
                </div>
            </div>
        </>
    )

}

export default modal;