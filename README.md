# Stack 

Tengo un poco de experiencia programando con c# y typescript.

Estando a puertas de iniciar un nuevo proyecto, quiero aprovechar mis conocimentos previos y expericencia,
por lo cual, la idea de este repo es elegir un stack basado en uno de esos lenguajes.
Finalmente elegiré el que demuestre mejor rendimiento corriendo sobre Linux.

- .net Core
- Node JS (Nest JS)
- Deno (Mandarine TS)

## Pruebas de rendimiento
- Se usará [wrk2](https://github.com/giltene/wrk2)

## Resultados
 - Deno (MandarineTS):
    ```ps1
    wrk -R 50000 -d 15s -t 4 -c 20 http://localhost:8080/
    ```
    Resultados:
    ```md
    Running 15s test @ http://localhost:8080/
    4 threads and 20 connections
    Thread calibration: mean lat.: 5108.320ms, rate sampling interval: 17252ms
    Thread calibration: mean lat.: 5107.445ms, rate sampling interval: 17268ms
    Thread calibration: mean lat.: 5105.187ms, rate sampling interval: 17268ms
    Thread calibration: mean lat.: 5105.016ms, rate sampling interval: 17252ms
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency    11.84s     1.35s   14.19s    57.72%
        Req/Sec       -nan      -nan   0.00      0.00%
    39927 requests in 15.00s, 11.58MB read

    Requests/sec:    **2661.16**
    Transfer/sec:    790.03KB
    ```
 - Node (NestJS):
    ```ps1
    wrk -R 50000 -d 15s -t 4 -c 20 http://localhost:3000/
    ```
    Resultados:
    ```md
    Running 15s test @ http://localhost:3000/
    4 threads and 20 connections
    Thread calibration: mean lat.: 5377.644ms, rate sampling interval: 17383ms
    Thread calibration: mean lat.: 5372.613ms, rate sampling interval: 17383ms
    Thread calibration: mean lat.: 5364.358ms, rate sampling interval: 17383ms
    Thread calibration: mean lat.: 5375.813ms, rate sampling interval: 17383ms
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency    11.82s     1.33s   14.12s    57.88%
        Req/Sec       -nan      -nan   0.00      0.00%
    43367 requests in 15.00s, 10.63MB read

    Requests/sec:    **2890.95**
    Transfer/sec:    725.56KB
    ```
- .net Core (ASP .NET 5):
    ```ps1
    wrk -R 50000 -d 15s -t 4 -c 20 http://localhost:5000/
    ```
    Resultados:
    ```md
    Running 15s test @ http://localhost:5000/
    4 threads and 20 connections
    Thread calibration: mean lat.: 4308.587ms, rate sampling interval: 15433ms
    Thread calibration: mean lat.: 3829.237ms, rate sampling interval: 13885ms
    Thread calibration: mean lat.: 4297.885ms, rate sampling interval: 15515ms
    Thread calibration: mean lat.: 4302.412ms, rate sampling interval: 15409ms
    Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency    10.45s     1.43s   12.52s    56.16%
        Req/Sec       -nan      -nan   0.00      0.00%
    126068 requests in 15.00s, 22.48MB read

    Requests/sec:      **8405.56**
    Transfer/sec:      1.50MB
    ```