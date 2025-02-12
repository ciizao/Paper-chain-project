<?php

namespace App\Console;

use Laravel\Lumen\Console\Kernel as ConsoleKernel;
use Illuminate\Console\Scheduling\Schedule;

class Kernel extends ConsoleKernel
{
    /**
     * Los comandos Artisan registrados en la aplicación.
     *
     * @var array
     */
    protected $commands = [];

    /**
     * Define la programación de tareas para la aplicación.
     *
     * @param Schedule $schedule
     */
    protected function schedule(Schedule $schedule)
    {
        // Aquí puedes agregar tareas programadas si las necesitas
    }
}
