import { API_ENDPOINT } from 'feedbackok-react'

export function preload(pid: string) {
  fetch(`${API_ENDPOINT}/project/${pid}`, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  }).catch(() => {})
}
