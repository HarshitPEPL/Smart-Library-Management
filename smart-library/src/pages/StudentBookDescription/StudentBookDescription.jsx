// import React from 'react';
// import StudentSideBar from '../../components/StudentSideBar';
// import { ArrowLeft, BookOpen, Share2, Heart } from 'lucide-react';
// import './StudentBookDescription.css';

// const StudentBookDescription = () => {
//     return (
//         <div className="StudentBookDescription-container">
//             <StudentSideBar />
//             <div className="StudentBookDescription-content">
//                 <div className="StudentBookDescription-backLink">
//                     <ArrowLeft size={20} />
//                     <span>Back to results</span>
//                 </div>

//                 <div className="StudentBookDescription-mainContent">
//                     <div className="StudentBookDescription-leftSection">
//                         <img 
//                             src="/api/placeholder/300/400"
//                             alt="Rich Dad Poor Dad book cover"
//                             className="StudentBookDescription-bookCover"
//                         />
//                         <div className="StudentBookDescription-actions">
//                             <div className="StudentBookDescription-actionItem">
//                                 <BookOpen size={20} />
//                                 <span>Notes</span>
//                             </div>
//                             <div className="StudentBookDescription-actionItem">
//                                 <Share2 size={20} />
//                                 <span>Share</span>
//                             </div>
//                             <div className="StudentBookDescription-actionItem">
//                                 <Heart size={20} />
//                                 <span>Wishlist's</span>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="StudentBookDescription-rightSection">
//                         <h1>Rich Dad Poor Dad</h1>
//                         <div className="StudentBookDescription-author">
//                             By <a href="#">Robert Kiyosaki</a>, 1997
//                         </div>
//                         <div className="StudentBookDescription-edition">
//                             Second Edition
//                         </div>

//                         <div className="StudentBookDescription-stats">
//                             <span>32 Currently reading</span>
//                             <span>245 Have read</span>
//                         </div>

//                         <div className="StudentBookDescription-availability">
//                             <h3>Availability</h3>
//                             <div className="StudentBookDescription-format">
//                                 <span className="StudentBookDescription-formatItem">
//                                     <span className="StudentBookDescription-dot"></span>
//                                     Hard Copy
//                                 </span>
//                                 <span className="StudentBookDescription-formatItem">
//                                     <span className="StudentBookDescription-dot"></span>
//                                     E- Book
//                                 </span>
//                                 <span className="StudentBookDescription-formatItem">
//                                     <span className="StudentBookDescription-dot"></span>
//                                     Audio book
//                                 </span>
//                             </div>
//                         </div>

//                         <div className="StudentBookDescription-buttons">
//                             <button className="StudentBookDescription-readBtn">Read now</button>
//                             <button className="StudentBookDescription-watchBtn">
//                                 Watch Now
//                                 <span className="StudentBookDescription-audioIcon">🎧</span>
//                             </button>
//                         </div>

//                         <div className="StudentBookDescription-overview">
//                             <h3>Overview</h3>
//                             <div className="StudentBookDescription-details">
//                                 <div className="StudentBookDescription-detailItem">
//                                     <h4>Publish Date</h4>
//                                     <p>1997</p>
//                                 </div>
//                                 <div className="StudentBookDescription-detailItem">
//                                     <h4>Publisher</h4>
//                                     <p className="StudentBookDescription-publisher">Warner Books</p>
//                                 </div>
//                                 <div className="StudentBookDescription-detailItem">
//                                     <h4>Language</h4>
//                                     <p className="StudentBookDescription-language">English</p>
//                                 </div>
//                                 <div className="StudentBookDescription-detailItem">
//                                     <h4>Pages</h4>
//                                     <p>336</p>
//                                 </div>
//                             </div>
//                             <div className="StudentBookDescription-preview">
//                                 Previews available in: <span>English</span>
//                             </div>
//                             <p className="StudentBookDescription-description">
//                                 Rich Dad Poor Dad is Robert Kiyosaki's best-selling book about the mindset differences between his highly educated but fiscally struggling father (Poor Dad) and his best friend's father (Rich Dad) who built wealth through entrepreneurship and investing. The book challenges conventional wisdom about money and explains why building assets, not liabilities, is the key to financial freedom...
//                                 <span className="StudentBookDescription-readMore">Read more</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StudentBookDescription;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import StudentSideBar from '../../components/StudentSideBar';
// import './StudentBookDescription.css';

// const StudentBookDescription = () => {
//     const navigate = useNavigate();
//     const [showNoteModal, setShowNoteModal] = useState(false);
//     const [isWishlisted, setIsWishlisted] = useState(false);
//     const [note, setNote] = useState({ title: '', body: '' });

//     const handleSaveNote = () => {
//         // Add logic to save note
//         setShowNoteModal(false);
//         setNote({ title: '', body: '' });
//     };

//     const toggleWishlist = () => {
//         setIsWishlisted(!isWishlisted);
//     };

//     return (
//         <div className="StudentBookDescription-container">
//             <StudentSideBar />
//             <div className="StudentBookDescription-content">
//                 <button 
//                     className="StudentBookDescription-backButton"
//                     onClick={() => navigate(-1)}
//                 >
//                     ← Back to results
//                 </button>

//                 <div className="StudentBookDescription-mainContent">
//                     <div className="StudentBookDescription-leftSection">
//                         <img 
//                             src="/RichDadPoorDad.png" 
//                             alt="Rich Dad Poor Dad cover"
//                             className="StudentBookDescription-bookCover"
//                         />
//                         <div className="StudentBookDescription-actions">
//                             <button className="StudentBookDescription-actionButton">
//                                 <i className="fas fa-pencil-alt"></i>
//                                 Notes
//                             </button>
//                             <button className="StudentBookDescription-actionButton">
//                                 <i className="fas fa-share-alt"></i>
//                                 Share
//                             </button>
//                             <button 
//                                 className={`StudentBookDescription-actionButton ${isWishlisted ? 'wishlisted' : ''}`}
//                                 onClick={toggleWishlist}
//                             >
//                                 <i className={`fas fa-heart ${isWishlisted ? 'active' : ''}`}></i>
//                                 Wishlist's
//                             </button>
//                         </div>
//                     </div>

//                     <div className="StudentBookDescription-rightSection">
//                         <h1>Rich Dad Poor Dad</h1>
//                         <div className="StudentBookDescription-author">
//                             By <a href="#">Robert Kiyosaki</a>, 1997
//                         </div>
//                         <div className="StudentBookDescription-edition">
//                             20th Anniversary Edition
//                         </div>

//                         <div className="StudentBookDescription-stats">
//                             <span>42 Currently reading</span>
//                             <span>238 Have read</span>
//                         </div>

//                         <div className="StudentBookDescription-availability">
//                             <h3>Availability</h3>
//                             <div className="StudentBookDescription-format">
//                                 <span className="format-available">✓ Hard Copy</span>
//                                 <span className="format-available">✓ E- Book</span>
//                                 <span className="format-available">✓ Audio book</span>
//                             </div>
//                         </div>

//                         <div className="StudentBookDescription-buttons">
//                             <button className="StudentBookDescription-readNow">Read now</button>
//                             <button className="StudentBookDescription-watchNow">
//                                 Watch Now
//                                 <i className="fas fa-headphones"></i>
//                             </button>
//                         </div>

//                         <div className="StudentBookDescription-overview">
//                             <h3>Overview</h3>
//                             <div className="StudentBookDescription-details">
//                                 <div className="StudentBookDescription-detail-item">
//                                     <span>Publish Date</span>
//                                     <span>1997</span>
//                                 </div>
//                                 <div className="StudentBookDescription-detail-item">
//                                     <span>Publisher</span>
//                                     <span>Plata Publishing</span>
//                                 </div>
//                                 <div className="StudentBookDescription-detail-item">
//                                     <span>Language</span>
//                                     <span>English</span>
//                                 </div>
//                                 <div className="StudentBookDescription-detail-item">
//                                     <span>Pages</span>
//                                     <span>336</span>
//                                 </div>
//                             </div>
//                             <p className="StudentBookDescription-preview">
//                                 Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing...
//                                 <button className="StudentBookDescription-readMore">Read more</button>
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 {showNoteModal && (
//                     <div className="StudentBookDescription-modal">
//                         <div className="StudentBookDescription-modalContent">
//                             <h2>Add Note</h2>
//                             <input
//                                 type="text"
//                                 placeholder="Title"
//                                 value={note.title}
//                                 onChange={(e) => setNote({...note, title: e.target.value})}
//                             />
//                             <textarea
//                                 placeholder="Write your note here..."
//                                 value={note.body}
//                                 onChange={(e) => setNote({...note, body: e.target.value})}
//                             />
//                             <div className="StudentBookDescription-modalButtons">
//                                 <button onClick={handleSaveNote}>Save</button>
//                                 <button onClick={() => setShowNoteModal(false)}>Cancel</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StudentBookDescription;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Share2, Heart, Check, X, Save } from 'lucide-react';
import StudentSideBar from '../../components/StudentSideBar';
import StudentBookPreview from '../../components/StudentBookPreview';
import './StudentBookDescription.css';

const StudentBookDescription = () => {
    const navigate = useNavigate();
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [note, setNote] = useState({ title: '', body: '' });
    const [showPreview, setShowPreview] = useState(false);

  
    const handleSaveNote = () => {

        if (note.title.trim() && note.description.trim()) {
            // Save note logic here
        setShowNoteModal(false);
        setNote({ title: '', body: '' });

        }
    };

    const handleDiscardNote = () => {
        setShowNoteModal(false);
        setNote({ title: '', description: '' });
    };

    const toggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className="StudentBookDescription-container">
            <StudentSideBar />
            <div className="StudentBookDescription-content">
                <button 
                    className="StudentBookDescription-backButton"
                    onClick={() => navigate(-1)}
                >
                    ← Back to results
                </button>

                <div className="StudentBookDescription-mainContent">
                    <div className="StudentBookDescription-leftSection">
                        <img 
                            src="/RichDadPoorDad.png" 
                            alt="Rich Dad Poor Dad cover"
                            className="StudentBookDescription-bookCover"
                        />
                        <div className="StudentBookDescription-actions">
                            <button 
                                className="StudentBookDescription-actionButton"
                                onClick={() => setShowNoteModal(true)}
                            >
                                <BookOpen className="action-icon" size={20} />
                                Notes
                            </button>
                            <button className="StudentBookDescription-actionButton">
                                <Share2 className="action-icon" size={20} />
                                Share
                            </button>
                            <button 
                                className={`StudentBookDescription-actionButton ${isWishlisted ? 'wishlisted' : ''}`}
                                onClick={toggleWishlist}
                            >
                                <Heart 
                                    className={`action-icon ${isWishlisted ? 'active' : ''}`} 
                                    size={20} 
                                    fill={isWishlisted ? "#ff4545" : "none"}
                                />
                                Wishlist
                            </button>
                        </div>
                    </div>

                    <div className="StudentBookDescription-rightSection">
                        <h1>Rich Dad Poor Dad</h1>
                        <div className="StudentBookDescription-author">
                            By <a href="#">Robert Kiyosaki</a>, 1997
                        </div>
                        <div className="StudentBookDescription-edition">
                            20th Anniversary Edition
                        </div>

                        <div className="StudentBookDescription-stats">
                            <span>42 Currently reading</span>
                            <span>238 Have read</span>
                        </div>

                        <div className="StudentBookDescription-availability">
                            <h3>Availability</h3>
                            <div className="StudentBookDescription-format">
                                <span className="format-available">
                                    <Check size={16} color="green" /> Hard Copy
                                </span>
                                <span className="format-available">
                                    <Check size={16} color="green" /> E-Book
                                </span>
                                
                                <span className="format-available">
                                    <X size={16} color="red" /> Audio book
                                </span>
                            </div>
                        </div>

                        <div className="StudentBookDescription-buttons">
<button 
    className="StudentBookDescription-readNow"
    onClick={() => setShowPreview(true)}
>
    Read now
</button>
<StudentBookPreview 
    isOpen={showPreview}
    onClose={() => setShowPreview(false)}
/>
                            <button className="StudentBookDescription-watchNow">
                                Watch Now
                                <i className="fas fa-headphones"></i>
                            </button>
                        </div>

                        <div className="StudentBookDescription-overview">
                            <h3>Overview</h3>
                            <div className="StudentBookDescription-details">
                                <div className="StudentBookDescription-detail-item">
                                    <span>Publish Date</span>
                                    <span>1997</span>
                                </div>
                                <div className="StudentBookDescription-detail-item">
                                    <span>Publisher</span>
                                    <span>Plata Publishing</span>
                                </div>
                                <div className="StudentBookDescription-detail-item">
                                    <span>Language</span>
                                    <span>English</span>
                                </div>
                                <div className="StudentBookDescription-detail-item">
                                    <span>Pages</span>
                                    <span>336</span>
                                </div>
                            </div>
                            <p className="StudentBookDescription-preview">
                                Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing...
                                <button className="StudentBookDescription-readMore">Read more</button>
                            </p>
                        </div>
                    </div>
                </div>

                {showNoteModal && (
                        <div className="StudentBookDescription-modal">
                            <div className="StudentBookDescription-modalContent">
                                <div className="StudentBookDescription-modal-header">
                                    <h2>Add Note</h2>
                                    <button 
                                        className="StudentBookDescription-close-button"
                                        onClick={handleDiscardNote}
                                    >
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="StudentBookDescription-modal-form">
                                    <div className="StudentBookDescription-form-group">
                                        <label htmlFor="note-title">Title</label>
                                        <input
                                            id="note-title"
                                            type="text"
                                            placeholder="Enter note title"
                                            value={note.title}
                                            onChange={(e) => setNote({...note, title: e.target.value})}
                                        />
                                    </div>
                                    <div className="StudentBookDescription-form-group">
                                        <label htmlFor="note-description">Description</label>
                                        <textarea
                                            id="note-description"
                                            placeholder="Write your note here..."
                                            value={note.description}
                                            onChange={(e) => setNote({...note, description: e.target.value})}
                                        />
                                    </div>
                                </div>
                                <div className="StudentBookDescription-modalButtons">
                                    <button 
                                        className="StudentBookDescription-discard-button"
                                        onClick={handleDiscardNote}
                                    >
                                        Discard
                                    </button>
                                    <button 
                                        className="StudentBookDescription-save-button"
                                        onClick={handleSaveNote}
                                    >
                                        <Save size={16} />
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default StudentBookDescription;