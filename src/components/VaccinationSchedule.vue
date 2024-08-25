<template>
  <v-card class="custom-card">
    <v-card-title>
      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="auto" class="text-uppercase text-subtitle-2">
          <span>Vaccination Schedule</span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <span
            style="color: #607d8b; font-size: 30px;"
            class="mdi mdi-magnify"
          ></span>
        </v-col>
        <v-col cols="2">
          <v-select
            label="By type"
            dense
            outlined
            hide-details
            class="select"
          ></v-select>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="items"
        class="custom-table"
        disable-pagination
        hide-default-footer
      >
        <!-- Slot para personalizar la columna 'Name' -->
        <template v-slot:[`item.name`]="{ item }">
          <h4 class="table-content">{{ item.name }}</h4>
        </template>

        <!-- Slot para personalizar la columna 'Type' -->
        <template v-slot:[`item.type`]="{ item }">
          <v-chip
            v-if="item.type === 'Overdue'"
            label
            outlined
            class="ma-0 chip1"
            style="background: #FCEBEF !important ;"
          >
            {{ item.type }}
          </v-chip>
          <v-chip
            v-else-if="item.type === 'Noncore'" 
            label
            outlined
            class="ma-0 chip2"
            style="background: #FCF5EB !important;"
          >
            {{ item.type }}
          </v-chip>
          <v-chip
            v-else-if="item.type === 'Core'"
            label
            outlined
            class="ma-0 chip3"
            style="background: #EAF8F1 !important;"
          >
            {{ item.type }}
          </v-chip>
        </template>

        <template v-slot:[`item.date`]="{ item }">
        <h4>{{ item.date }}</h4>
        </template>
        <!-- Slot para personalizar la columna 'Veterinarian' -->
        <template v-slot:[`item.veterinarian`]="{ item }">
          <v-chip
            :class="item.veterinarian === 'Find veterinarian' ? 'veterinarian-highlight' : 'veterinarian-default'"
            outlined
            class="ma-0 veterinarian-chip"
          >
            <span>{{ item.veterinarian }}</span>
          </v-chip>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
        { text: 'Veterinarian', value: 'veterinarian' },
      ],
      items: [
        {
          name: 'Rabies',
          type: 'Overdue',
          date: '01 Dec 2023',
          veterinarian: 'Find veterinarian',
        },
        {
          name: 'Bordetella',
          type: 'Noncore',
          date: '11 Dec 2024',
          veterinarian: 'James Grey',
        },
        {
          name: 'Distemper',
          type: 'Core',
          date: '27 Jun 2024',
          veterinarian: 'Jim Brown',
        },
        {
          name: 'Calicivirus',
          type: 'Core',
          date: '16 Sep 2024',
          veterinarian: 'Helen Brooks',
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-data-table {
  border-radius: 8px !important;
  border: 2px solid #DAE3F8 !important; /* Color del borde de la tabla */
}

.v-card-title {
  font-weight: bold;
}

.table-content {
  margin: 0;
  padding: 30% 0; /* Ajusta el padding para aumentar el espaciado vertical */
}

.custom-table .v-data-table__wrapper {
  padding-bottom: 20px !important; /* Aumenta el espaciado entre las filas */
}

.chip1 { 
  color: #D03258; 
  border-color: #c1e1f7;
  border-radius: 10px !important;
  font-weight: bold;
}

.chip2 {
  color: #F2A735; 
  border-color: #F7E1C1;
  border-radius: 10px !important;
  font-weight: bold;
}

.chip3 {
  color: #27A468; 
  border-color: #BDE8D3;
  border-radius: 15% !important;
  font-weight: bold;
}

.v-chip.veterinarian-highlight {
  background-color: #1976d2 !important; 
  color: rgb(0, 0, 0) !important; 
  border-color: #1976d2 !important;
}

.v-chip.veterinarian-default {
  background: rgb(184, 27, 27) !important; 
  color: #607d8b !important; 
  border-color: #cfd8dc !important;
}

.custom-card {
  border-radius: 10px !important;

}
</style>
