import steps from '../../fixtures/steps.json'

export default function handler(req, res) {
  res.status(200).json(steps)
}
