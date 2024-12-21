import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState(""); // State for markdown input
  const [preview, setPreview] = useState("");  // State for preview content
  const [loading, setLoading] = useState(false); // State for loading indicator

  const parseMarkdown = (text) => {
    // Replace headers
    text = text.replace(/^###### (.*$)/gm, "<h6>$1</h6>");
    text = text.replace(/^##### (.*$)/gm, "<h5>$1</h5>");
    text = text.replace(/^#### (.*$)/gm, "<h4>$1</h4>");
    text = text.replace(/^### (.*$)/gm, "<h3>$1</h3>");
    text = text.replace(/^## (.*$)/gm, "<h2>$1</h2>");
    text = text.replace(/^# (.*$)/gm, "<h1>$1</h1>");
    // Replace bold
    text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    // Replace italic
    text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
    // Replace line breaks
    text = text.replace(/\n/g, "<br />");

    return text;
  };

  useEffect(() => {
    // Simulate a delay for loading effect
    setLoading(true);
    const timer = setTimeout(() => {
      setPreview(parseMarkdown(markdown));
      setLoading(false);
    }, 500);

    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div className="app">
      <div className="textarea-container">
        <textarea
          className="textarea"
          placeholder="Write your markdown here..."
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>
      <div className="preview-container">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: preview }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
