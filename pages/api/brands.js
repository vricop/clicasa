import brands from '../../fixtures/brands.json'

export default function handler(req, res) {
  res.status(200).json(brands)
}
