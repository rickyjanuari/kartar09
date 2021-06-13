<script>
  import {
      onMount
  } from "svelte";

  let search = ""

  const apiURL =
      "https://spreadsheets.google.com/feeds/list/1lsln7FG0gUatwCXTpmDRNrGuIsy6CbSmdgKWQ7c24ZE/1/public/values?alt=json";
  let data = [];
  let dataArr = []

  onMount(async function () {
      const response = await fetch(apiURL);
      data = await response.json();
      dataArr = data.feed.entry;
      console.log(dataArr[1].gsx$tahun.$t);
  });
</script>

<section class="kas container mh-container">
<div class="grid grid-cols-2 px-5">
  <div>FILTER BERDASARKAN TAHUN</div>
  <div>
    <select class="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="search" bind:value={search}>
      <option value="">Semua Tahun</option>
      <option value="2019">2019</option>
      <option value="2020">2020</option>
      <option value="2021">2021</option>
  </select></div>
  <br>
</div>

<table clas="data-kas">
  <thead>
      <tr class="bg-gray-200  uppercase text-sm leading-normal">
          <th
              class="tanggal px-5  border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold  uppercase tracking-wider">
              Tanggal
          </th>
          <th
              class="keterangan px-5  border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold  uppercase tracking-wider">
              Keterangan
          </th>
          <th
              class="pemasukan px-5  border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold  uppercase tracking-wider">
              Pemasukan
          </th>
          <th
              class="pengeluaran px-5  border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold  uppercase tracking-wider">
              Pengeluaran
          </th>
          <th
              class="saldo px-5  border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold  uppercase tracking-wider">
              Saldo
          </th>
      </tr>
  </thead>
  <tbody class="text-sm font-light">
      {#each dataArr as item }
    {#if item.gsx$tahun.$t.toLowerCase().includes(search.toLowerCase()) }
              {#if item.gsx$bulan.$t}
                  <tr class="tr-bulan">
                      <td colspan="5">{item.gsx$bulan.$t}</td>
                  </tr> 
              {:else} 
              {/if}
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="tanggal   ">
                       {item.gsx$tanggal.$t}
                  </td>
                  <td class="keterangan   ">
                      {item.gsx$keterangan.$t}
                  </td>
                  <td class="pemasukan   ">
                      
                                  {#if item.gsx$pemasukan.$t}
                                      Rp. {item.gsx$pemasukan.$t}
                                  {:else} 
                                  
                                  {/if}
                            
                  </td>
                  <td class="pengeluaran   ">
                      
                                  {#if item.gsx$pengeluaran.$t}
                                      Rp. {item.gsx$pengeluaran.$t}
                                  {:else} 
                                  
                                  {/if}
                              
                  </td>
                  <td class="saldo ">
                      
                                 Rp. {item.gsx$saldo.$t}
                             
                  </td>
              </tr>
    {/if}
  {/each}
  </tbody>
</table>


  <div class="load-3 text-center">
    <p>Mohon Tunggu Sebentar Sedang Mengambil Data Dari Server</p>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>


<h2 class="jumlah-saat-ini">Jumlah Total Uang Kas Saat ini :  <strong>
  Rp. {#each dataArr as item }
     {item.gsx$jumlahsaldo.$t}
  {/each}
</strong></h2>
</section>



<style>
  .kas{
    padding: 0px !important;
    padding-top: 30px !important;
  }

</style>
