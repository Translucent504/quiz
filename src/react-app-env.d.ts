/// <reference types="react-scripts" />
type question = {
    questionText: string;
    correct: string;
    incorrect: string[];
    options: string[];
}

type questions = question[];