// Add this script section to your Svelte component
<script>
  import { onMount } from 'svelte';

  let expenses = [];
  let selectedType = '';

  // Function to fetch expenses data from the backend API
  async function fetchExpenses() {
    try {
      const response = await fetch('https://your-backend-api.com/expenses');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      expenses = await response.json();
    } catch (error) {
      console.error('Error fetching expense data:', error);
    }
  }

  onMount(fetchExpenses); // Fetch data when the component is mounted
</script>
