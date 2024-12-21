import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";

const App = () => {
  const [markdown, setMarkdown] = useState(""); // State for markdown input
  const [preview, setPreview] = useState("");  // State for preview content
  const [loading, setLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    // Simulate a delay for loading effect
    setLoading(true);
    const timer = setTimeout(() => {
      setPreview(marked(markdown));
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


