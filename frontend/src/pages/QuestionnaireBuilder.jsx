import { useState } from "react";
import {
  ChevronLeft,
  ChevronDown,
  Upload,
  MoreHorizontal,
  X,
  Edit,
} from "lucide-react";

const questionTypes = [
  "True/False",
  "Paragraph",
  "Multiple Choice",
  "File Upload",
];

function QuestionBlock({ questionIndex }) {
  const [questionType, setQuestionType] = useState("True/False");

  const renderQuestionContent = () => {
    switch (questionType) {
      case "True/False":
        return (
          <div>
            {["True", "False"].map((label) => (
              <div key={label} className="mb-4">
                <div className="mb-2 text-sm font-medium">{label}</div>
                <div className="flex items-center">
                  <input type="radio" className="w-4 h-4 mr-2"  />
                  <span className="text-sm text-gray-600">Option 1</span>
                </div>
              </div>
            ))}
          </div>
        );
      case "Paragraph":
        return (
          <textarea
            placeholder="User's long answer..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        );
      case "Multiple Choice":
        return (
          <div>
            {["Option 1", "Add option"].map((label, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="radio" className="w-4 h-4 mr-2" />
                <span className="text-sm text-gray-600">{label}</span>
              </div>
            ))}
            <button className="text-sm text-blue-500">Add "Other"</button>
          </div>
        );
      case "File Upload":
        return (
          <div className="space-y-3">
            <div className="text-sm text-gray-700">Allow file types:</div>
            {["Document", "Image", "PDF", "Audio"].map((type) => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                {type}
              </label>
            ))}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-700">Max Files</div>
              <input
                type="number"
                defaultValue={2}
                className="w-16 border p-1 rounded"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      <div className="mb-2 text-sm text-gray-700">Question {questionIndex + 1}</div>
      <input
        type="text"
        placeholder="Enter your question here"
        className="w-full p-3 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      {/* Question Type Dropdown */}
      <div className="flex justify-end mb-4">
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          className="w-48 p-2.5 border border-gray-300 rounded-md text-sm"
        >
          {questionTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>

      {renderQuestionContent()}
    </div>
  );
}

export default function QuestionnaireBuilder() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-3 flex items-center justify-center border rounded">
            <Edit size={16} />
          </div>
          <span className="text-sm font-medium">Project Name</span>
        </div>

        <div className="text-lg font-medium">Questionnaire</div>

        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500">
            <MoreHorizontal size={20} />
          </button>
          <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm">
            Preview
          </button>
          <button className="px-4 py-1.5 bg-indigo-500 text-white rounded-md text-sm">
            Publish
          </button>
          <button className="p-1 text-gray-500">
            <X size={20} />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-start">
          <button className="mt-1 mr-4 text-gray-500">
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1">
            <QuestionBlock questionIndex={0} />
            <div className="flex justify-end mb-8">
              <button className="text-sm font-medium text-indigo-600">
                + Add another question
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
