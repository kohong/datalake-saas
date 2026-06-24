# Data Lake SaaS (Local MVP)

This repository contains a local, containerized Minimum Viable Product (MVP) of a Data Lake SaaS platform tailored for Data Engineers. It emulates a cloud Lakehouse environment on a local machine using Docker Compose.

## 🚀 Architecture & Tech Stack

This project uses an open-source stack to provide a unified data engineering platform:

*   **Storage Layer:** [MinIO](https://min.io/) (Local S3-compatible object storage)
*   **Data Catalog:** [Project Nessie](https://projectnessie.org/) (Git-like Data Catalog for Apache Iceberg)
*   **Table Format:** [Apache Iceberg](https://iceberg.apache.org/)
*   **Compute Engine:** [Apache Spark](https://spark.apache.org/) (Standalone Cluster)
*   **Orchestration:** Dagster (Coming in Phase 2)
*   **Workspace:** JupyterLab (Coming in Phase 2)
*   **Control Plane:** React + FastAPI (Coming in Phase 3)

## 🛠️ Prerequisites

To run this platform locally, you will need:
*   [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Docker Compose)
*   Git

## 🚦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kohong/datalake-saas.git
    cd datalake-saas
    ```

2.  **Configure Environment Variables:**
    Copy the example environment file and configure any necessary secrets.
    ```bash
    cp .env.example .env
    ```

3.  **Start the Infrastructure (Phase 1):**
    ```bash
    docker compose up -d
    ```

4.  **Access the Services:**
    *   **MinIO Console:** `http://localhost:9001` (Default login: admin/password)
    *   **Spark Master UI:** `http://localhost:8080`
    *   **Spark Worker UI:** `http://localhost:8081`
    *   **Nessie API:** `http://localhost:19120/api/v2`
    *   **JupyterLab:** `http://localhost:8888`
    *   **Dagster UI:** `http://localhost:3000`

## 📋 Implementation Phases

- [x] **Phase 1: Infrastructure Setup:** MinIO, Nessie, and Spark.
- [x] **Phase 2: Orchestration & Workspace:** Dagster and JupyterLab integration.
- [ ] **Phase 3: Control Plane UI:** Custom React/FastAPI frontend.

---
*Note: This README will be updated as new features and components are added to the platform.*
