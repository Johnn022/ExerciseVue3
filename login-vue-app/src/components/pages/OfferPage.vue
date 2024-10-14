<script setup>
//  import { h } from 'vue'
 import LayoutDiv from '../LayoutDiv.vue';
 /********************************************/ 

import { format } from 'date-fns'
import TableTanstack from './TableTanstack.vue'
import offer from '../../data/mockDataOffers.json'
import people from '../../data/mockDataPeople.json'

 /********************************************/

// export default {
//    name: 'OfferPage',
//    components: {
//      LayoutDiv,
//    }
// }

/*************************/
const columnsPeople = [
  {
    accessorKey: 'id',
    header: 'ID',
    enableSorting: false,
  },
  {
    accessorKey: 'first_name',
    header: 'First name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  }
  ,
  {
    accessorKey: 'created_at',
    header: 'Created',
    cell: info => format(new Date(info.getValue()), 'MMM d, yyyy'),
  }
]
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
        <!-- <div class="row justify-content-md-center">
            <TableTanstack :data="people" :columns="columnsPeople" />
        </div>      -->

        <div class="row justify-content-md-center">
            <TableTanstack :data="offer" :columns="columnsOffers" />
        </div> 
</layout-div>
  </template>
