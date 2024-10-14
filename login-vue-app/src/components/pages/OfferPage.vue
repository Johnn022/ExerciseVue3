<script setup>
 import LayoutDiv from '../LayoutDiv.vue';
import { format } from 'date-fns'
import TableTanstack from './TableTanstack.vue'
import offer from '../../data/mockDataOffers.json'


const columnsOffers = [
  {
    accessorKey: 'uri',
    header: 'URI',
    enableSorting: false,
  },
  {
    accessorKey: 'date',
    header: 'Date',
    cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'),
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'desc',
    header: 'Description',
  }
]

</script>
<template>
     <layout-div>
        <div class="row justify-content-md-center">
            <TableTanstack :data="offer" :columns="columnsOffers" />
        </div> 
</layout-div>
  </template>
