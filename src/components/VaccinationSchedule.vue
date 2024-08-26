<template>
  <v-card outlined class="custom-card">
    <v-card-title>
      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="auto" class="text-uppercase text-subtitle-2">
          <span>Vaccination Schedule</span>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="1">
          <span style="color: #607d8b; font-size: 30px;" class="mdi mdi-magnify"></span>
        </v-col>
        <v-col cols="2">
          <v-select label="By type" dense outlined hide-details class="select"></v-select>
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
          <div class="chip-container">
            <span
              :class="{
                'chip chip-overdue': item.type === 'Overdue',
                'chip chip-noncore': item.type === 'Noncore',
                'chip chip-core': item.type === 'Core'
              }"
            >
              {{ item.type }}
            </span>
          </div>
        </template>

        <template v-slot:[`item.date`]="{ item }">
          <h4>{{ item.date }}</h4>
        </template>

        <!-- Slot para personalizar la columna 'Veterinarian' -->
        <template v-slot:[`item.veterinarian`]="{ item }">
          <div
            class="btn-veterinarian"
            :class="item.veterinarian === 'Find veterinar' ? 'veterinarian-highlight' : 'veterinarian-default'"
            @click="handleVeterinarianClick(item.veterinarian)"
          >
            {{ item.veterinarian }}
          </div>
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
          veterinarian: 'Find veterinar',
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
  methods: {
  },
};
</script>

<style scoped>
/* Estilos de la tabla */
.v-data-table {
  border-radius: 8px !important;
  border: 2px solid #DAE3F8 !important;
}

.v-card-title {
  font-weight: bold;
}

.table-content {
  margin: 0;
  padding: 30% 0;
}

.custom-table .v-data-table__wrapper {
  padding-bottom: 20px !important;
}

/* Estilos de los chips */
.chip-container {
  display: flex;
  align-items: center;
}

.chip {
  padding: 0.2em 0.6em;
  border-radius: 12px;
  font-weight: bold;
  font-size: 0.9em;
}

.chip-overdue {
  background-color: #FCEBEF;
  color: #D03258;
}

.chip-noncore {
  background-color: #FCF5EB;
  color: #F2A735;
}

.chip-core {
  background-color: #EAF8F1;
  color: #27A468;
}

/* Estilos de los botones */
.btn-veterinarian {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
}

.veterinarian-highlight {
  background-color: #1976d2;
  color: white;
}

.veterinarian-default {
  background-color: #ffffff;
  color: #607d8b;
  border: 1px solid #DAE3F8;
}

.custom-card {
  border-radius: 10px !important;
}
</style>
