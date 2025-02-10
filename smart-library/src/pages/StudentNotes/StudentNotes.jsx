// import React from 'react';
// import StudentSidebar from '../../components/StudentSideBar';
// import StudentNavBar from '../../components/StudentNavBar';
// import './StudentNotes.css';

// const StudentNotes = () => {
//   return (
//     <div className="StudentNotes-container">
//       <StudentSidebar />
//       <StudentNavBar />
//         <div className="StudentNotes-content">
//           {/* Add your notes content here */}
          
//         </div>
      
//     </div>
//   );
// };

// export default StudentNotes;


import React, { useState } from 'react';
import StudentSidebar from '../../components/StudentSideBar';
import StudentNavBar from '../../components/StudentNavBar';
import './StudentNotes.css';

const StudentNotes = () => {
  const [activeTab, setActiveTab] = useState('myNotes');
  const [showModal, setShowModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const teacherNotes = [
    {
      date: 'November 29,2024',
      time: '10:13 AM',
      title: 'Quiz on Chapter 2 & 3 !',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Important Quiz Information:\n\n- Duration: 45 minutes\n- Topics Covered: \n  • Layer management and organization\n  • Basic selection tools and techniques\n  • Color modes and adjustments\n  • Working with masks\n\nPreparation Materials:\n- Review Chapter 2 slides (Pages 15-42)\n- Complete practice exercises from Chapter 3\n- Watch tutorial videos on layer management\n\nNote: This quiz will account for 20% of your final grade. Make sure to review all workshop materials thoroughly before attempting the quiz.'
    },
    {
      date: 'November 29,2024',
      time: '10:13 AM',
      title: 'Quiz on Chapter 2 & 3 !',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Key Concepts to Review:\n\n- Understanding the Layers Panel:\n  • Creating and deleting layers\n  • Layer opacity and fill\n  • Layer styles and effects\n\n- Selection Tools:\n  • Marquee and Lasso tools\n  • Magic Wand and Quick Selection\n  • Refine Edge techniques\n\nPractice Exercises:\n- Complete the workspace organization exercise\n- Try the layer masking challenge\n- Review the color correction workshop'
    },
    {
      date: 'November 29,2024',
      time: '10:13 AM',
      title: 'Quiz on Chapter 2 & 3 !',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Quiz Format and Structure:\n\n1. Multiple Choice Questions (40%)\n   • Tool identification\n   • Best practices\n   • Workflow scenarios\n\n2. Practical Assessment (60%)\n   • Layer organization task\n   • Basic photo manipulation\n   • Color correction exercise\n\nReminder: Make sure your Photoshop is updated to the latest version before the quiz.'
    },
    {
      date: 'November 29,2024',
      time: '10:13 AM',
      title: 'Quiz on Chapter 2 & 3 !',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Study Resources:\n\n1. Recommended Practice:\n   • Chapter 2 Exercise Files\n   • Tutorial Projects 1-3\n   • Practice Quiz from Week 2\n\n2. Additional Materials:\n   • Video tutorials on basic tools\n   • Sample projects for reference\n   • Troubleshooting guide\n\nOffice Hours: Available for questions Tuesday and Thursday 2-4 PM'
    },
    {
      date: 'November 29,2024',
      time: '10:13 AM',
      title: 'Quiz on Chapter 2 & 3 !',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Technical Requirements:\n\n1. Software Needs:\n   • Photoshop 2024 (updated)\n   • Working webcam and microphone\n   • Stable internet connection\n\n2. Quiz Platform:\n   • Access through course portal\n   • Test browser compatibility beforehand\n   • Save progress regularly\n\nHelp & Support: Contact technical support at least 24 hours before the quiz if you experience any issues.'
    }
  ];

  const myNotes = [
    {
      date: 'February 08,2024',
      time: '2:30 PM',
      title: 'Personal Notes: Layer Masking Techniques',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Today\'s Learning Points:\n\n1. Layer Masks Basics:\n   • White reveals, black conceals\n   • Using gradient masks for smooth transitions\n   • Brush tool with masks for precise editing\n\n2. Advanced Techniques:\n   • Feathering masks for soft edges\n   • Group masks vs. individual layer masks\n   • Mask refinement tools\n\nPersonal Tips:\n- Use keyboard shortcut "B" for brush tool\n- Hold shift for straight lines\n- Remember to work non-destructively!\n\nQuestions to Ask Next Class:\n- How to handle hair masking?\n- Best practices for mask organization'
    },
    {
      date: 'February 07,2024',
      time: '11:45 AM',
      title: 'Study Summary: Color Correction',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Color Correction Notes:\n\n1. Basic Adjustments:\n   • Levels for tonal range\n   • Curves for precise control\n   • Hue/Saturation for color intensity\n\n2. Color Balance:\n   • Understanding RGB vs. CMYK\n   • Working with color wheels\n   • Temperature and tint adjustments\n\nPractice Results:\n- Successfully fixed overexposed photo\n- Learned to correct white balance\n- Experimented with color grading\n\nReminder: Download color correction action sets for next class'
    },
    {
      date: 'February 06,2024',
      time: '3:15 PM',
      title: 'Practice Exercise Notes: Blend Modes',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Blend Modes Exploration:\n\n1. Darkening Modes:\n   • Multiply - best for shadows\n   • Color Burn - intense darkening\n   • Linear Burn - stronger effect\n\n2. Lightening Modes:\n   • Screen - good for highlights\n   • Overlay - contrast enhancement\n   • Soft Light - subtle effects\n\nPersonal Experiments:\n- Created double exposure effect\n- Text blending techniques\n- Texture overlay practice\n\nFavorite Combinations:\n- Multiply for shadows + Screen for highlights\n- Overlay for adding texture'
    },
    {
      date: 'February 05,2024',
      time: '1:20 PM',
      title: 'Review Notes: Basic Tools Overview',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Essential Tools Review:\n\n1. Selection Tools:\n   • Marquee (M) - geometric selections\n   • Lasso (L) - freehand selections\n   • Magic Wand (W) - color-based selections\n\n2. Manipulation Tools:\n   • Move Tool (V)\n   • Transform (Ctrl/Cmd + T)\n   • Crop Tool (C)\n\n3. Enhancement Tools:\n   • Brush (B)\n   • Clone Stamp (S)\n   • Healing Brush (J)\n\nPersonal Reminders:\n- Practice keyboard shortcuts daily\n- Remember to save versions\n- Back up files regularly'
    },

    {
      date: 'February 05,2024',
      time: '1:20 PM',
      title: 'Review Notes: Basic Tools Overview',
      course: 'Course: Ultimate Photoshop Training: From Beginner',
      details: 'Essential Tools Review:\n\n1. Selection Tools:\n   • Marquee (M) - geometric selections\n   • Lasso (L) - freehand selections\n   • Magic Wand (W) - color-based selections\n\n2. Manipulation Tools:\n   • Move Tool (V)\n   • Transform (Ctrl/Cmd + T)\n   • Crop Tool (C)\n\n3. Enhancement Tools:\n   • Brush (B)\n   • Clone Stamp (S)\n   • Healing Brush (J)\n\nPersonal Reminders:\n- Practice keyboard shortcuts daily\n- Remember to save versions\n- Back up files regularly'
    }



    
  ];

  const currentNotes = activeTab === 'myNotes' ? myNotes : teacherNotes;

  const handleExpand = (note) => {
    setSelectedNote(note);
    setShowModal(true);
  };

  return (
    <div className="StudentNotes-container">
      <StudentSidebar />
      <StudentNavBar />
      <div className="StudentNotes-content">
        <div className="StudentNotes-header">
          <h1 className="StudentNotes-title">Notes</h1>
          <div className="StudentNotes-tabs">
            <button 
              className={`StudentNotes-button ${activeTab === 'myNotes' ? 'StudentNotes-button-active' : ''}`}
              onClick={() => setActiveTab('myNotes')}
              style={{ backgroundColor: activeTab === 'myNotes' ? '#3b82f6' : '#20ba58' }}
            >
              My Notes
            </button>
            <button 
              className={`StudentNotes-button ${activeTab === 'teachersNotes' ? 'StudentNotes-button-active' : ''}`}
              onClick={() => setActiveTab('teachersNotes')}
              style={{ backgroundColor: activeTab === 'teachersNotes' ? '#20ba58' : '#3b82f6' }}
            >
              Teachers Notes
            </button>
          </div>
        </div>
        
        <div className="StudentNotes-table">
          <div className="StudentNotes-tableHeader">
            <div className="StudentNotes-date-column">Date</div>
            <div className="StudentNotes-detail-column">Detail</div>
            <div className="StudentNotes-expand-column"></div>
          </div>
          
          {currentNotes.map((note, index) => (
            <div key={index} className="StudentNotes-row">
              <div className="StudentNotes-date-column">
                <div className="StudentNotes-date">{note.date}</div>
                <div className="StudentNotes-time">{note.time}</div>
              </div>
              <div className="StudentNotes-detail-column">
                <div className="StudentNotes-title-text">{note.title}</div>
                <div className="StudentNotes-course">{note.course}</div>
              </div>
              <div className="StudentNotes-expand-column">
                <button 
                  className="StudentNotes-expand-button"
                  style={{ backgroundColor: activeTab === 'myNotes' ? '#3b82f6' : '#22c55e' }}
                  onClick={() => handleExpand(note)}
                >
                  Expand
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && selectedNote && (
          <div className="StudentNotes-modal-overlay">
            <div className="StudentNotes-modal">
              <div className="StudentNotes-modal-header">
                <h2>{selectedNote.title}</h2>
                <button 
                  className="StudentNotes-modal-close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="StudentNotes-modal-content">
                <div className="StudentNotes-modal-info">
                  <p><strong>Date:</strong> {selectedNote.date} {selectedNote.time}</p>
                  <p><strong>Course:</strong> {selectedNote.course}</p>
                </div>
                <div className="StudentNotes-modal-details">
                  <p>{selectedNote.details}</p>
                </div>
              </div>
              <div className="StudentNotes-modal-footer">
                <button 
                  className="StudentNotes-modal-ok"
                  onClick={() => setShowModal(false)}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentNotes;



