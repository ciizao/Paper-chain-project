<?php

namespace App\Exceptions;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;
use Laravel\Lumen\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{

    public function report(Throwable $exception)
    {
        parent::report($exception);
    }


    public function render($request, Throwable $exception)
    {
        return response()->json([
            'error' => $exception->getMessage()
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
}
