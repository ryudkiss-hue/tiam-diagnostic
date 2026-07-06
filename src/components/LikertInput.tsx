interface LikertInputProps {
  questionId: number
  value: number | undefined
  onChange: (value: number) => void
}

const LABELS = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']

export function LikertInput({ questionId, value, onChange }: LikertInputProps) {
  return (
    <div role="radiogroup" aria-label={`Question ${questionId} answer`} className="flex flex-wrap gap-2">
      {LABELS.map((label, index) => {
        const optionValue = index + 1
        const isSelected = value === optionValue
        return (
          <button
            key={optionValue}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange(optionValue)}
            className={`rounded-full border px-3 py-1 text-sm ${
              isSelected ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-700'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
