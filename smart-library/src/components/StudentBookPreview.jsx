import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Heart, Maximize, Eye } from 'lucide-react';
import './StudentBookPreview.css';

const StudentBookPreview = ({ isOpen, onClose }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 200;
    const previewRef = useRef(null); // Reference for the container to be made full-screen
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown

    const handleFullScreen = () => {
        const elem = previewRef.current; // Get the container reference
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { // For Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // For Internet Explorer
            elem.msRequestFullscreen();
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    if (!isOpen) return null;

    return (
        <div className="StudentBookPreview-overlay" ref={previewRef}>
            <div className="StudentBookPreview-container">
                <div className="StudentBookPreview-header">
                    <div className="StudentBookPreview-headerLeft">
                        <button onClick={onClose} className="StudentBookPreview-backButton">
                            <ChevronLeft size={20} />
                            Back
                        </button>
                        <div className="StudentBookPreview-bookInfo">
                            <h2>RICH DAD POOR DAD</h2>
                            <span className="StudentBookPreview-authorInfo">Robert Kiyosaki</span>
                        </div>
                    </div>
                    
                    <div className="StudentBookPreview-headerRight">
                        <Heart className="StudentBookPreview-icon" />
                        <button className="StudentBookPreview-button" onClick={handleFullScreen}>
                            <Maximize size={16} />
                            Full Screen
                        </button>
                        <div className="StudentBookPreview-dropdown">
                            <button className="StudentBookPreview-button" onClick={toggleDropdown}>
                                <Eye size={16} />
                                View
                            </button>
                            {isDropdownOpen && (
                                <ul className="StudentBookPreview-dropdownMenu">
                                    <li>Page</li>
                                    <li>Booklet</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                <div className="StudentBookPreview-content">
                    <button className="StudentBookPreview-pageButton left">
                        <ChevronLeft size={24} />
                    </button>
                    
                    <div className="StudentBookPreview-pages">
                        <div className="StudentBookPreview-pageNumber">
                            {currentPage} & {currentPage + 1} of {totalPages}
                        </div>
                        <div className="StudentBookPreview-pageContainer">
                            <div className="StudentBookPreview-page">
                                <h1>Introduction</h1>
                                <h2>RICH DAD POOR DAD</h2>
                                <p className="StudentBookPreview-quote">
                                    Having two dads offered me the choice of contrasting points of view:
                                    one of a rich man and one of a poor man.
                                </p>    
                                <p>
                                I had two fathers, a rich one and a poor one. One was highly educated and intelligent. He had a Ph.D. and completed four years of undergraduate work in less than two years. He then went on to Stanford University, the University of Chicago, and Northwestern University to do his advanced studies, all on full financial scholarships. The other father never finished the eighth grade.
Both men were successful in their careers, working hard all their lives. Both earned substantial incomes. Yet one always struggled financially. The other would become one of the richest men in Hawaii. One died leaving tens of millions of dollars to his family, charities, and his church. The other left bills to be paid.
Both men were strong, charismatic, and influential. Both men offered advice, but they did not advise the same things. Both men believed strongly in education but did not recommend the same course of study.
If I had had only one dad, I would have had to accept or reject his advice. Having two dads offered the choice of contrasting points of view: one of a rich man and one of a poor man.
Instead of simply accepting or rejecting one or the other, I found myself thinking more, comparing, and then choosing for myself. The problem was that the rich man was not rich yet, and the poor man
                                    {/* Add content */}
                                </p>
                            </div>
                            <div className="StudentBookPreview-page">
                                <p>
                                    Both were just starting out on their careers, and both were struggling with money and families. But they had very different points of view about money.
For example, one dad would say, "The love of money is the root of all evil." The other said, "The lack of money is the root of all evil."
As a young boy, having two strong fathers both influencing me was difficult. I wanted to be a good son and listen, but the two fathers did not say the same things. The contrast in their points of view, particularly about money, was so extreme that I grew curious and intrigued. I began to start thinking for long periods of time about what each was saying.
Much of my private time was spent reflecting, asking myself questions such as, "Why does he say that?" and then asking the same question of the other dad's statement. It would have been much easier to simply say, "Yeah, he's right. I agree with that." Or to simply reject the point of view by saying, "The old man doesn't know what he's talking about." Instead, having two dads whom I loved forced me to think and ultimately choose a way of thinking for myself. As a process, choosing for myself turned out to be much more valuable in the long run than simply accepting or rejecting a single point of view.
One of the reasons the rich get richer, the poor get poorer, and the middle class struggles in debt is that the subject of money is taught at home, not in school. Most people learn about money from their parents. So what can poor parents tell their child about money? They simply say, "Stay in school and study hard." The child may graduate with excellent grades, but with a poor person's financial programming and mindset.
Sadly, money is not taught in schools. Schools focus on scholastic and professional skills, but not on financial skills. This explains how smart bankers, doctors, and accountants who earned excellent grades may struggle financially all of their lives. Our staggering national debt is due in large part to highly educated politicians and government officials making financial decisions with little or no training in the subject of money.
                                    {/* Add content */}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="StudentBookPreview-pageButton right">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentBookPreview;
