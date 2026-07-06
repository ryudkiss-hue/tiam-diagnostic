import type { Question } from '../data/types'
import { LikertInput } from './LikertInput'

interface AxisHorizonGroupProps {
  title: string
  questions: Question[]
  answers: Record<number, number>
  onAnswer: (questionId: number, value: number) => void
}

export function AxisHorizonGroup({ title, questions, answers, onAnswer }: AxisHorizonGroupProps) {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-5">
        {questions.map((question) => (
          <li key={question.id}>
            <p className="mb-2">{question.statement}</p>
            <LikertInput
              questionId={question.id}
              value={answers[question.id]}
              onChange={(value) => onAnswer(question.id, value)}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
