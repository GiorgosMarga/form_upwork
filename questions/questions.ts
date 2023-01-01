interface Question {
  key: number;
  title: string;
  question?: string;
  subtitle?: string;
  questions: string[];
  showDetails?: boolean;
  showReport?: boolean;
  disabled?: boolean;
}
export const formQuestion: Question[] = [
  {
    key: 1,
    title: "PERFORMANCE OPTIMIZATION QUESTION",
    subtitle: `Potential performance optimizations include infinite scrolling,
       loading thumbnails, recycler-views, caching`,
    questions: [
      "Multiple Suggested performance with explanations of why they are useful.",
      "One suggested performance optimization with an explanations of why they are useful.",
      "One or more suggestions, but no explanation of why any of them are useful.",
      "One or more suggestions, but some apsect of the candidate's answer would have an unintended negative performance impact.",
      "One or more suggestions, but the candidate's answer would have an intentionally negative performance impact.",
      "Response includes no suggestions that would have any conceivable performance impact",
      "No response to the question at all.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 2,
    title: "TRANSITION QUESTION",
    subtitle:
      "Example detailed response: Slides to left or expands (the transition should indicate that the user is progressing thought the app); 200-300 ms (slow enough for eye, but fast enough to be zippy);",
    questions: [
      "Multiple transition ideas with explanations of how they would impact UX.",
      "One transition idea with an explanation of how it would impact UX",
      "One or more transition ideas, but no explanation of how it would impact UX.",
      "One ore more transition ideas, but some aspect of the candidate's answer would have unintended negative UX impact.",
      "One or more transitions ideas, but the candidate's answer would have an intentionally negative UX impact",
      "Response includes no suggested UX transitions.",
      "No response to the question at all.",
    ],
    showDetails: true,
    showReport: true,
    disabled: true,
  },
  {
    key: 3,
    title: "ACCESSIBILITY QUESTION",
    subtitle:
      "Potential features include localization, voice support, font size changes",
    questions: [
      "Multiple suggested accessibility improvements with explanations of why they are useful.",
      "One suggested accessibility improvement with an explanation of why they are useful.",
      "One or more suggestions, but no explanation of why an of them are useful.",
      "One or more suggestions, but some aspect of the candidate's answer would have an unintended negative accessibility impact.",
      "One or more suggestions, but the candidate's answer would have an intentionally negative accessibility impact.",
      "One or more suggestions, but the candidate's answer would have any conceivable impact",
      "No response to the question at all.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 4,
    title: "SORT CRITERIA QUESTION",
    subtitle:
      "User centered sort criteria include: price, distance, rating, brand of charging station, recently used,favorites, etc.",
    questions: [
      "Multiple suggestions with explanations of why they would impact the user.",
      "One suggestion with an explanation of how it would impact the user.",
      "One or more suggestions, but no explanation of how they would impact the user.",
      "One or more suggestions, but some aspect of the candidate's answer would have an unintended negative impact on the user.",
      "One or more suggestions, but the candidate's answer would have an intentionally negative impact on the user.",
      "Response includes no suggestion that would have any conceivable user impact.",
      "No response to the question at all.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 5,
    title: "FLAKY INTERNET QUESTION",
    subtitle:
      "Potential solutions include: if request fails, define retry strategy; autotimeout; displaying on screen when connection lost; offline-mode support",
    questions: [
      "Multiple suggested networking improvements with explanations of why they are useful.",
      "One suggested networking improvement with an explanation of why they are useful.",
      "One or more suggestions, but no explanation of why any of them are useful.",
      "One or more suggestions, but some aspect of the candidate's answer would have an unintended negative networking impact.",
      "One or more suggestions, but the candidate's answer would have an intentionally negative networking impact.",
      "One or more suggestions, but the candidate's answer would have any conceivable networking impact",
      "No response to the question at all.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 6,
    title: "CONCLUSION",
    question:
      "Which of the following best describe the candidate's considerations of the pros and cons of the options?",
    subtitle: "",
    questions: [
      "Explained why their choice is better than the other option AND offered a reasonable path towards mitigating the cons of their choice.",
      "Explained why their choice is better than the other option ANS explained why the listed cons of their choice are acceptable.",
      "Performed some analysis, but ignored or dismissed the listed pros or cons that didn't support their argument.",
      "Simply reiterated the listed pros / cons with little to no further analysis.",
      "Failed to explain how their chosen option is better than the other option",
      "Did not recommend an option.",
      "Didn't write a conclusion.",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 7,
    title: "",
    question:
      "Which of the following best describe the technical analysis in the candidate's conclusion?",
    subtitle: `Below are some technical concerns that we consider 'primary':
      (1) Maintaining filtering logic across multiple platforms
      (2) Computational complexity / scalability of the solution
      (3) Latency (as a technical problem)
      `,
    questions: [
      "Demonstrated technical expertise beyond the context provided in the design doc, in addition to making reasonable statements about 1+ primary technical concerns.",
      "Made reasonable statements about 2+ primary technical concern.",
      "Only made reasonable statements about 1 primary technical concern.",
      "Made incorrect technical statements or assumptions that demonstrated a general lack of technical understanding. ",
      "Did not make any statements about technical concerns beyond what is already listed in the design document.",
      "Didn't write a conclusion.",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 8,
    title: "",
    question:
      "Which of the following best describes the candidate's discussion of the impact their choice (or the choices) would have the user?",
    subtitle: `Below are some user concerns that the candidate might consider:
      (1) Latency (as a UX problem)
      (2) Offline UX impact
      `,
    questions: [
      "Provided a detailed analysis of impact on the user.",
      "Demonstrated a basic understanding of impact on the user.",
      "Demonstrated care for the user, but didn't show understanding or misunderstanding of the user impact of their proposed solution.",
      "Clearly misunderstood the impact their proposed solution would have on the user.",
      "Demonstrated disregard for the impact their proposed solution  would have on the user.",
      "Didn't acknowledge the user in any way.",
      "Didn't write a conclusion",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 9,
    title: "",
    question:
      "Which of the following best describes the structure of the candidate's argument in the conclusion?",
    subtitle: `Argument Structure: The ability to write a coherent set of sentences that justify the author's intended point.
      Note: If the candidate makes an interesting argument elsewhere in the doc, please consider as well when selecting an option below.
      `,
    questions: [
      "The argument is exceptionally well-structured.",
      "The argument effectively supports the conclusion.",
      "The argument relies on one or more significant unstated assumptions, makes one or more significant logical leaps, or contradicts itself in some way.",
      "The argument doesn't support their conclusion is any clear way",
      "Didn't write a conclusion",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 10,
    title: "",
    question:
      "Please write 1-3 sentences describing the candidate's conclusion. What went well? What didn't go well?",
    subtitle: "",
    questions: [],
    showDetails: true,
    showReport: true,
  },
  {
    key: 11,
    title: "OVERALL FEEDBACK",
    question:
      "Did the candidate seek clarification or ask questions about any portion of the design?",
    subtitle: `
      `,
    questions: [
      "Sought clarification or asked questions about 3+ statements or ideas related to major design considerations.",
      "Sought clarification or asked questions about 1-2 statements or ideas related to major design considerations.",
      "Only sought clarification about thinks that have little or no impact on major technical/design considerations.",
      "Did not seek clarification about any aspect of the design document",
      "Did not write any response or comments",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 12,
    title: "",
    question:
      "Did the candidate propose any new ideas in any of their responses or comments",
    subtitle: `This can include, but is not limited to:
      - Creating and advocating for an entirely new option (or an argumentation of an existing one) in the conclusion.
      - Responding to one of the comment questions with a suggestion for an entirely different approach
      `,
    questions: [
      "Proposed 2+ idea that weren't already provided in the design doc.",
      "Proposed 1 idea that wasn't provided in the design doc.",
      "Proposed no ideas that weren't already provided in the design doc.",
      "Proposed no new ideas, and performed no significant analysis of any of the ideas in the design doc.",
      "Did not write any responses or comments.",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 13,
    title: "",
    question:
      "Which of the following best describes the overall Writing Clarity of the candidate's responses?",
    subtitle: `Writing Clarity: The ability to present ideas in a way that is easy for others to follow.`,
    questions: [
      "Ideas were exceptionally clear and easy to follow (e.g. user spacing creatively, made complex ideas simple, used good analogies).",
      "Ideas were easy to understand.",
      "Ideas were somewhat to understand.",
      "Ideas were quite difficult to understand.",
      "There was not enough writing to evaluate the candidate's writing clarity.",
    ],
    showDetails: false,
    showReport: false,
  },
  {
    key: 14,
    title: "",
    question:
      "Which of the following best describes the overall approach to Collaboration that the candidate demonstrated in the course of their comments and responses?",
    subtitle: `Collaboration: The ability to work well as an individual within a team.
      
      Note: If the candidate communicates in a way that is rude or condescending, please select the option, regardless whether any of the options also fit their performance. Also be sure to elaborate in the additional comments box below`,
    questions: [
      "Communicated in a way that demonstrated a desire to incorporate the perspective of others.",
      "Used collaborative language (e.g. we, ours) that demonstrated a sense of shared ownership.",
      "Used respectful language, but didn't demonstrate any sense of shared ownership of the product.",
      "Communicated in a way that is rude or condescending.",
      "Did not write any responses or comments.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 15,
    title: "INTERNAL GRADING NOTES",
    question: "Based on this module, should this candidate come onsite?",
    subtitle: ``,
    questions: [
      "Strong Pass",
      "Pass.",
      "Leaning Pass.",
      "Leaning Fail.",
      "Fail.",
      "I don't know / not enough signal.",
    ],
    showDetails: true,
    showReport: true,
  },
  {
    key: 16,
    title: "",
    question:
      "Move Forward for a SWE Internship or Entry Level SWE (<1 year of experience)",
    subtitle: `Based on the candidate's submission (positive vs negative signal),do you feel that this candidate should be given the opportunity to move forward to the next round of interviews? Please select "Yes" or "No" unless you're very torn on whether we should invite this candidate for more interviews (in which case select "unsure"). You should NOT select "unsure" as a proxy for "not enough signal" (you should select no if the candidate made very minimal progress).`,
    questions: ["Yes", "No", "Not sure"],
    showDetails: false,
    showReport: false,
  },
  {
    key: 17,
    title: "",
    question:
      "Move Forward for an Above Entry Level SWE(1+ year of experience)",
    subtitle: `Based on the candidate's submission (positive vs negative signal),do you feel that this candidate should be given the opportunity to move forward to the next round of interviews? Please select "Yes" or "No" unless you're very torn on whether we should invite this candidate for more interviews (in which case select "unsure"). You should NOT select "unsure" as a proxy for "not enough signal" (you should select no if the candidate made very minimal progress).`,
    questions: ["Yes", "No", "Not sure"],
    showDetails: false,
    showReport: true,
    disabled: true,
  },
];
