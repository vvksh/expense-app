<!-- ExpenseTrends.svelte -->
<script>
  let expenses = []; // This will hold the fetched data
  let selectedType = ''; // To filter expenses by type
</script>

<h1>Expense Trends</h1>

<!-- Dropdown to filter by type -->
<select bind:value={selectedType}>
  <option value="">All Types</option>
  <option value="food">Food</option>
  <option value="transportation">Transportation</option>
  <!-- Add more options for different expense types -->
</select>

<!-- Expense list -->
<ul>
  {#each expenses as expense}
    {#if !selectedType || expense.type === selectedType}
      <li>{expense.date}: {expense.amount} USD ({expense.type})</li>
    {/if}
  {/each}
</ul>
